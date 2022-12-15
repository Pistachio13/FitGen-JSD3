import React, { useState } from "react";
import { useContext } from "react";
import { hiking } from "../image/hiking.png";
import bike from '../image/bike.png';
import ActivitiesContext from "../Context/ActContext"
import ActivityIcon from "../ActivityIcon/ActivityIcon";



const CardInfo = ({activity = '', date = '', endDate = ''}) => {
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

                <div className='description'>
                    <p>sdgsdgsdg</p>
                </div>

                <div className="edit">
                    <button className="start">Start</button>
                    <a className="EandD" href='/'>Edit</a>
                    <a className="EandD" href='/'>Delete</a>
                </div>
            </div>

        </div>
    )
}

export default CardInfo;