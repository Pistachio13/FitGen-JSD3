import React, { useState } from "react";
import { useContext } from "react";
import { hiking } from "../image/hiking.png";
import bike from '../image/bike.png';
import ActivitiesContext from "../Context/ActContext"
import ActivityIcon from "../ActivityIcon/ActivityIcon";



const CardInfo = ({activity = '', date = '', endDate = '',description = ''}) => {
    const [background,setBackground] = useState('red')
    return (
        <div className="mini-card">
            <div className="card">
                <h2>{activity}</h2>
               <ActivityIcon activity={activity} />
                <div className="start-end">
                    <div className="start">
                        <p>Start</p>
                        <p className="start-exercise">{date}</p>
                    </div>

                    <div class="square"></div>
                    <div className="end">
                        <p>End</p>
                        <p className="finish-exercise">{endDate}</p>
                    </div>
                </div>
                <div class="square"></div>
                <div className='description'>
                <p className="info">Description</p>
                    <p>{description}</p>
                </div>

                <div className="edit">
                    <button className="start" 
                    style={{ background: background }}
                    onClick={() => setBackground(prevBackground => (prevBackground === 'red' ? 'blue' : 'red'))}
                  >
                    Start
                    </button>
                    <button className="EandD" href='/'>Edit</button>
                    <button className="EandD" href='/'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default CardInfo;