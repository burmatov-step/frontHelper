import React, {FC, useContext, useEffect, useState} from "react";
import { observer } from 'mobx-react-lite';
import Post from "../followPosts/components/Post";
import { Context } from '../../index';
import './styles/FollowPosts.css'
import $api from '../../http/index'
import { AxiosResponse } from "axios";
const FollowPosts: FC<any> = (props) =>{
    const {store} = useContext(Context);

    const [loginAccount, setLoginAccount] = useState('')
    const [typeAccount, setTypeAccount] = useState('')
    const [globalTypeAccount, setglobalTypeAccount] = useState('')
    const [allTypeAccount, setallTypeAccount] = useState([])
    const [allLoginAccount, setAllLoginAccount] = useState([])
    const [allPosts, setallPosts] = useState([{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    },{
        "comments_count": 89,
        "caption": "ШПАРГАЛКА ПО КАШАМ 🥣 \n\nСегодня у меня для вас шпаргалки по кашам и на тот случай, если под рукой не окажется весов. 😉\n⠀\nИ несколько нюансов👇\n⠀\n• Если готовите кашу на воде, используйте фильтрованную или кипяченую. Ведь каша, приготовленная на воде из-под крана, вберет в себя металлический привкус или неприятный запах хлорки.\n⠀\n• Сушка на сухой сковороде (прокаливание) круп перед приготовлением блюд улучшает вкус каши, облегчает переваривание и повышает питательную ценность.\n⠀\n• Варить лучше в посуде с толстым дном. И после выключения плиты оставить кашу под закрытой крышкой, так она продолжит довариваться. \n⠀\n• Перед варкой крупы всегда нужно просеивать, перебирать и хорошо промывать. Но это не касается манной, кукурузной, ячневой крупы.\n⠀\n• Если замачивать крупы перед готовкой, то процесс варки минимизируется. Ведь чем меньше подвергается тепловой обработке крупа, тем больше в ней сохраняется питательной ценности.\n⠀\n• Если добавить масло в крупу при варке, это поможет смягчить жесткую воду и придаст каждому зернышку способность отталкивать воду, не допуская разваривания изнутри.\n⠀\nАвтор: natali_zey_recepti\n⠀\nНадеюсь будет полезно 😉 Любите каши? Какая самая любимая?❤️",
        "media_type": "CAROUSEL_ALBUM",
        "like_count": 11312,
        "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/260091529_601364407840716_9051028867580388381_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=dL_sf15HxSIAX80o3My&_nc_ht=scontent-lga3-2.cdninstagram.com&edm=AL-3X8kEAAAA&oh=13b96d45ad67f6172b0e2d26464925d7&oe=61A786C6",
        "id": "17929645738888369"
    }])
    const getAllNameAccount = async(type: any) =>{
        store.setPreloader(true)
        const response:AxiosResponse<any> = await $api.post('/findAll_account', {userId: store.user.id, type})
        if(response?.status != 200){
            store.setPreloader(false)
            return
        }
        setAllLoginAccount(response.data)
        store.setPreloader(false)
    }
    const removeLoginAccount = async(userId: any, idAccount: any) =>{
        store.setPreloader(true)
        const response:AxiosResponse<any> = await $api.post('/delete_account', {userId, idAccount})
        if(response.status != 200){
            store.setPreloader(false)
            return
        }
        // getAllNameAccount()
        store.setPreloader(false)
    }

    const createLoginAccount = async(userId: any, login: any, type:any) =>{
        store.setPreloader(true)
        const response: any = await $api.post('/create_find_account', {userId, login, type})
        
        if(!response.data.success){
            store.setPreloader(false)
            alert(response.data.message)
            return
        } 
            getAllNameAccount(globalTypeAccount)
            setLoginAccount('')
            store.setPreloader(false)
    }

    const getAllTypeAcconunt = async() =>{
        store.setPreloader(true)
        const response:AxiosResponse<any> = await $api.post('/findAll_type_account', {userId: store.user.id})
        if(response.status != 200){
            store.setPreloader(false)
            return
        }
        setallTypeAccount(response.data)
        store.setPreloader(false)
    }

    const createTypeAccount = async(userId: any, type: any) =>{
        store.setPreloader(true)
        const response = await $api.post('/create_type_account', {userId, type})
        if(response.status != 200){
            store.setPreloader(false)
            return
        }
        getAllTypeAcconunt()
        setTypeAccount('')
        store.setPreloader(false)
    }

    const getPosts = async() =>{
        store.setPreloader(true)
        if(props.dataFacebook.isAuth){
            const responses: any = await $api.post('/test_fb', {token: props.dataFacebook.token, loginData:allLoginAccount})
                
            if(responses.status == 200){
                let sort: any = responses?.data?.sort((a: any, b: any) => {
                   return b.like_count - a.like_count
                })
                setallPosts(sort)
                store.setPreloader(false)
            }
        }
        store.setPreloader(false)

    }
    useEffect(() => {
        getAllTypeAcconunt()
        store.setPage('find')
      }, []);
    return(
        <div className='followPosts'>
            <div className="followPosts__wrapper">   
                <div className="followPosts__posts">
                    <div className="followPosts__posts-title">
                        Посты
                    </div>
                    <div className="all__find-posts">
                    {allPosts.map((example: any) =>{
                        console.log('example', example)
                                return <Post {...example} />
                                })}
                    </div>
                </div>
                <div className="followPosts__setting">
                    <div className="followPosts__setting-title">
                        Настройки
                    </div>
                    <div className="followPosts__setting-info">
                        <div className="followPosts__setting-info__themeSearch">
                            <div className='theme__search_label' >
                                Добавить тему поиска
                                <input type="text" value={typeAccount} onInput={(e) =>{
                                    const target = e.target as HTMLTextAreaElement
                                    setTypeAccount(target.value)
                                }} placeholder='Введите тему поиска' />
                            </div>
                            <div className="theme__search-add" onClick={() => createTypeAccount(props.userId, typeAccount)}>

                            </div>
                        </div>
                        <div className="followPosts__setting-info__theme">
                            <label className='theme_label' >
                                Выберите тему поиска
                                <div className="followPosts-select__wrapper">
                                    <select onChange={(e)=>{
                                        setglobalTypeAccount(e.target.value)
                                        getAllNameAccount(e.target.value)
                                    } }>
                                        <option>Выберите тему</option>
                                        {allTypeAccount.map((theme: any) =>{
                                          return  <option key={theme._id} value={theme.type}>{theme.type}</option>
                                        })}
                                        
                                    </select>
                                    <img className='followPosts-select__arrow' src="./arrow.svg" alt="" />
                                </div>
                            </label>
                        </div>
                        <div className="followPosts__setting-info__accoundAdd">
                            <div className='accoundAdd_label' >
                                Добавить аккаунт
                                <input value={loginAccount} onInput={(e) =>{
                                    const target = e.target as HTMLTextAreaElement
                                    setLoginAccount(target.value)
                                }} type="text" placeholder='Введите логин аккаунта' />
                            </div>
                            <div className="accoundAdd-add" onClick={() => createLoginAccount(props.userId,loginAccount, globalTypeAccount)} >

                            </div>
                        </div>

                        <div className="followPosts__setting__allAccounts">
                            <div className="allAccounts-title">
                                Аккаунты по теме Авто
                            </div>
                            <div className="allAccounts__wrapper">
                                {allLoginAccount.map((account:any) =>{
                                    return  <div key={account._id} className="allAccounts_item">
                                                <div className="allAccounts_item-text">
                                                    {account.login}
                                                </div>
                                                <div className="allAccounts_item-del">
                                                    <img src="./delete.svg" alt="" />
                                                </div>
                                            </div>
                                })}
                            </div>
                        </div>
                        <div className="followPosts__setting-getPost" onClick={getPosts}>
                            <button className='getPost-button'>
                                Получить посты
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default observer(FollowPosts)