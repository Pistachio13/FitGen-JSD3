import React, {useContext} from "react";
import { useState } from 'react';
import './Schedule.css';
import ActivitiesContext from '../Context/ActContext'

import hiking from '../image/hiking.png';

export const Schedule = ({onCloseHandler =() => {}}) => {
    const {activities, setActivities} = useContext(ActivitiesContext)
    const [activity, setActivity] = useState('')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [date, setDate] = useState('')
    const [endDate, setEnd] = useState('')
    const [description, setDescription] = useState('')

    const inputAcitivty = (e) => {
        setActivity(e.target.value)
    }

    const inputDurationHour = (e) => {
        setHour(e.target.value)
    }

    const inputDurationMinute = (e) => {
        setMinute(e.target.value)
    }

    const inputDate = (e) => {
        setDate(e.target.value)
    }

    const inputEnd = (e) => {
        setEnd(e.target.value)
    }

    const inputDescription = (e) => {
        setDescription(e.target.value)
    }

    const saveItem = (e) => {
        e.preventDefault()
        const itemData = {
            activity: activity,
            hour: Number(hour),
            minute: Number(minute),
            date: date,
            endDate: date,
            description: description
        }
        setActivities([...activities,itemData])
        console.log(itemData);
        setActivity('')
        setHour('')
        setMinute('')
        setDate('')
        setEnd('')
        setDescription('')
    }

    return (
        <div className='container-all'>
        <div className="hiking-pic">
            <div className='background'></div>
            <h1>Hiking</h1>
            <img src={hiking} alt='Hiking' />
            <form className='topInformation' onSubmit={saveItem}>
                <div className='Activity form-Control'>
                    <label className='name'><span>Activity</span>
                        <select className='choices' name='Activities' id="Activities" onChange={inputAcitivty} value={activity} >
                            <option value="Hiking"> Hiking</option>
                            <option value="Run"> Run</option>
                            <option value="Swimming"> Swimming</option>
                            <option value="Walk"> Walk</option>
                            <option value="Bike"> Bike</option>
                        </select>
                    </label>

                    <div className='Duration form-Control'>
                        <label className='time-count'><span>Duration</span>
                            <input type="number" placeholder='Hour' className='hour-input' onChange={inputDurationHour} value={hour} />
                            <input type="number" placeholder='Minute' className='minute-input' onChange={inputDurationMinute} value={minute} />
                        </label>
                    </div>

                    <div className='Date form-Control'>
                        <label><span>Start Date</span>
                            <input type="datetime-local" onChange={inputDate} value={date} />
                        </label>
                    </div>

                    <div className='Date form-Control'>
                        <label><span>End Date</span>
                            <input type="datetime-local" onChange={inputEnd} value={endDate} />
                        </label>
                    </div>

                    <div className='Description'>
                        <label><span>Description</span>
                            <textarea type='text' onChange={inputDescription} value={description}></textarea>
                        </label>
                    </div>

                </div>
                <div className='btn-group'>
                    <button className='btn-confirm' type='submit' >Confirm</button>
                    <button className='btn-cancel' onClick={(onAddPlanClick) => {
                        onAddPlanClick.preventDefault()
                        onCloseHandler()
                    }}>Cancel</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Schedule;