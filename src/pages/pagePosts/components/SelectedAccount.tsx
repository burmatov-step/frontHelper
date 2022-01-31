import React, {FC, useState} from "react";
import '../styles/PagePosts.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const SelectedAccount: FC<any> = (props) =>{
    const [isCalendar, setIsCalendar] = useState(false)
    const hours = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    const minutes =[0,5,10,15,20,25,30,35,40,45,50,55]
    props.setUsernameAccount(props.accountName)
    const onChange = (e: any) =>{
        console.log(e)
        props.setdataTime(e)
        // props.setdataTime(e.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ))
        setIsCalendar(false)
    }

    return(
        <div className='selected__account'>
            <div className="selected__account-username">
                {props.accountName}
            </div>
            <div className="selected__account-wrapper">
                <div className="selected__account-calendar" onClick={() => setIsCalendar(true)}>
                    <div className="calendar-date" >
                        {props.dataTime.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' )}
                    </div>
                    <div className="calendar__icon">
                        <img src="./calendarIcon.svg" alt="" />
                    </div>
                    {isCalendar && <div className="open-calendar"><Calendar  onChange={onChange} /></div>}
                </div>
                <label className="selected__account-label">
                <div className="selected__account-time-wrapper">
                <select onChange={(e) => props.setHoursTime(+e.target.value)} >
                    {hours.map((hour) => {
                       return <option value={hour}>{hour}</option>
                    })}
                </select>
                <img className='selected__account__arrow' src="./arrow.svg" alt="" />
                </div>

                </label>
                <label className="selected__account-label">
                    <div className="selected__account-time-wrapper">
                        <select onChange={(e) => props.setMinuteTime(+e.target.value)}>
                            {minutes.map((minute) => {
                                return <option value={minute}>{minute}</option>
                            })}
                        </select>
                        <img className='selected__account__arrow' src="./arrow.svg" alt="" />
                    </div>

                </label>
            </div>
        </div>
    )
}

export default SelectedAccount 