import React, {useContext} from "react";
import { useState } from 'react';
import './Schedule.css';
import ActivitiesContext from '../Context/ActContext'
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import uuid from 'react-uuid';


export const Schedule = ({onCloseHandler =() => {}}) => {
    const {activities, setActivities} = useContext(ActivitiesContext)
    const [activityName, setActivityName] = useState('Choose your activity')
    const [hour, setHour] = useState('')
    const [minute, setMinute] = useState('')
    const [date, setDate] = useState('')
    const [endDate, setEnd] = useState('')
    const [description, setDescription] = useState('')

    const inputAcitivty = (e) => {
        setActivityName(e.target.value)
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
            id:uuid(),
            activityName,
            hour: Number(hour),
            minute: Number(minute),
            date,
            endDate,
            description,
        }
        setActivities([...activities,itemData])
        setActivityName('')
        setHour('')
        setMinute('')
        setDate('')
        setEnd('')
        setDescription('')
        console.log('itemData',itemData)
    }

    return (
        <div className='container-all'>
        <div className="hiking-pic">
            <div className='background'></div>
            <h1>{activityName}</h1>
            <ActivityIcon activityName={activityName} />
            <form className='topInformation' onSubmit={saveItem}>
                <div className='Activity form-Control'>
                    <label className='name'><span>Activity</span>
                        <select className='choices' name='Activities' id="Activities" onChange={inputAcitivty} value={activityName} >
                            <option value="Choose Activity">--Choose activity--</option>
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