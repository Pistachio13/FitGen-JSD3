import React from "react";
import { useContext } from "react";
import {hiking} from "../image/hiking.png";
import bike from '../image/bike.png';
import ActivitiesContext from "../Context/ActContext"

const CardInfo = ( activity = '',startDate = '' , endDate = '') => {
    console.log(activity, startDate, endDate)
    return (
    <div className="mini-card">
        <div className="card">
            <h2>{activity}</h2>
            <img src={bike} alt='logo' />
            <div className="start-end">
                <div className="start">
                    <p>Start</p>
                    <p className="start-exercise">{startDate}</p>
                </div>

                <div class="square"></div>
                <div className="end">
                    <p>End</p>
                    <p className="finish-exercise">{endDate}</p>
                </div>
            </div>
            <div className="edit">
                <a className="start" href='/'>Start</a>
                <a className="EandD" href='/'>Edit</a>
                <a className="EandD" href='/'>Delete</a>
            </div>
        </div>

    </div>
    )
}

export default CardInfo;