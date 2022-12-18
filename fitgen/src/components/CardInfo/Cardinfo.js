import React, { useState } from "react";
import { useContext, } from "react";
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import ActContext from "../Context/ActContext";



const CardInfo = (props) => {
    const [background, setBackground] = useState('red')
    const { activity = 'Choose your activity', date = '', endDate = '', description = '' } = props

    //TODO: create activity class to replace props when set editActivity
    const { setEditActivity, setShouldShowEditor, removeItem } = useContext(ActContext)
    const [text, setText] = useState('Start');

    const toggle = () => {
        setText(!text);
    }


    return (
        <div className="mini-card">
            <div className="card">
                <h2>{activity}</h2>
                <ActivityIcon activity={activity || ''} />
                <div className="start-end">
                    <div className="start">
                        <p>Start</p>
                        <p className="start-exercise">{date}</p>
                    </div>

                    <div className="square"></div>
                    <div className="end">
                        <p>End</p>
                        <p className="finish-exercise">{endDate}</p>
                    </div>
                </div>
                <div className="square"></div>
                <div className='description'>
                    <p className="info">Description</p>
                    <p>{description}</p>
                </div>

                <div className="edit">
                    <button className={"start" + (text ? 'toggle--Done' : '')}

                        onClick={toggle} >                                                
                        {text ? 'Start' : 'Done'}    
                        
                    </button>
                    <button className="EandD" onClick={(e) => {
                        setEditActivity(props)
                        setShouldShowEditor(true)
                    }}>Edit</button>
                    <button className="EandD" onClick={() => removeItem()} >Delete</button>
                </div>
            </div>

        </div>
    )
}

export default CardInfo;