import React, { useState, useEffect } from "react";
import { useContext, } from "react";
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import ActContext from "../Context/ActContext";

const CardInfo = (props) => {
    const { id = '-1', activityName = 'Choose your activity', startDate= '', endDate = '', description = '' } = props

    //TODO: create activity class to replace props when set editActivity
    const { setEditActivity, setShouldShowEditor, removeItem } = useContext(ActContext)
    const [isTimerActive, setIsTimerActive] = useState(false)
    const [timerID, setTimerID] = useState(-1)
    const [startTime, setStartTime] = useState(0)
    const [endTime, setEndTime] = useState(0)

    const toggle = () => {
        setIsTimerActive(!isTimerActive)
    }

    const getDuration = () => (endTime - startTime)
    const getDurationInSeconds = () => Math.floor(getDuration() / 1000)

    useEffect(() => {
        if (isTimerActive) {
            setStartTime(Date.now())
            setEndTime(Date.now())
            setTimerID(setInterval(() => {
                setEndTime(Date.now())
                console.log('timeInterval', endTime)
            }, 1000))
        } else {
            clearInterval(timerID)
        }

        return () => {
            clearInterval(timerID)
        }
    }, [isTimerActive])


    return (
        <div className="mini-card">
            <div className="card">
                <h2>{activityName}</h2>
                <ActivityIcon activityName={activityName || ''} />
                <div className="start-end">
                    <div className="start">
                        <p>Start</p>
                        <p className="start-exercise">{startDate}</p>
                    </div>

                    <div className="square"></div>
                    {getDurationInSeconds() + ' sec'}
                </div>
                <div className="square"></div>
                <div className='description'>
                    <p className="info">Description</p>
                    <p>{description}</p>
                </div>

                
                <div className="edit">
                    <button className={"start" + (isTimerActive ? 'toggle--Done' : '')}
                        onClick={toggle} >
                        {isTimerActive ? 'Done' : 'Start'}

                    </button>
                    <button className="EandD" onClick={(e) => {
                        setEditActivity(props)
                        setShouldShowEditor(true)
                    }}>Edit</button>
                    <button className="EandD" onClick={() => /*{if (confirm('Do you want to delete this activity?'))*/ removeItem(id)}>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default CardInfo;