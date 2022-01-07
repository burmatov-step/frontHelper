import React, {FC, useState} from "react";
import '../styles/PagePosts.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const SelectedAccount: FC<any> = (props) =>{
    const [isCalendar, setIsCalendar] = useState(false)
    const [date, setDate] = useState(new Date().toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ))
    const onChange = (e: any) =>{
        setDate(e.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' ))
        setIsCalendar(false)
    }
    return(
        <div className='selected__account'>
            <div className="selected__account-username">
                mama.kulinarr
            </div>
            <div className="selected__account-wrapper">
                <div className="selected__account-calendar" onClick={() => setIsCalendar(true)}>
                    <div className="calendar-date" >
                        {date}
                    </div>
                    <div className="calendar__icon">
                        <img src="./calendarIcon.svg" alt="" />
                    </div>
                    {isCalendar && <div className="open-calendar"><Calendar  onChange={onChange} /></div>}
                </div>
                <label className="selected__account-label">
                <div className="selected__account-time-wrapper">
                <select >
                    <option value="00">00</option>
                </select>
                <img className='selected__account__arrow' src="./arrow.svg" alt="" />
                </div>

                </label>
                <label className="selected__account-label">
                    <div className="selected__account-time-wrapper">
                        <select >
                            <option value="00">00</option>
                        </select>
                        <img className='selected__account__arrow' src="./arrow.svg" alt="" />
                    </div>

                </label>
            </div>
        </div>
    )
}

export default SelectedAccount 