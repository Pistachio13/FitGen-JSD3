import React from "react";
import bike from '../image/bike.png';
import './Card.css';

const Card = () => {
    return (
        <div className="allcard">

            <div class="square-horizon"></div>

            <div className='addPlan-button'>
                <a href='/'>Add plan</a>
            </div>

            <div className="mini-card">
                <div className="card">
                    <h2>Bike</h2>
                    <img src={bike} alt='logo' />
                    <div className="start-end">
                        <div className="start">
                            <p>Start</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>

                        <div class="square"></div>
                        <div className="end">
                            <p>End</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>
                    </div>
                    <div className="edit">
                        <a className="start" href='/'>Start</a>
                        <a className="EandD" href='/'>Edit</a>
                        <a className="EandD" href='/'>Delete</a>
                    </div>
                </div>

                <div className="card">
                    <h2>Bike</h2>
                    <img src={bike} alt='logo' />
                    <div className="start-end">
                        <div className="start">
                            <p>Start</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>

                        <div class="square"></div>
                        <div className="end">
                            <p>End</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>
                    </div>
                    <div className="edit">
                        <a className="start" href='/'>Start</a>
                        <a className="EandD" href='/'>Edit</a>
                        <a className="EandD" href='/'>Delete</a>
                    </div>
                </div>

                <div className="card">
                    <h2>Bike</h2>
                    <img src={bike} alt='logo' />
                    <div className="start-end">
                        <div className="start">
                            <p>Start</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>

                        <div class="square"></div>
                        <div className="end">
                            <p>End</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>
                    </div>
                    <div className="edit">
                        <a className="start" href='/'>Start</a>
                        <a className="EandD" href='/'>Edit</a>
                        <a className="EandD" href='/'>Delete</a>
                    </div>
                </div>

                <div className="card">
                    <h2>Bike</h2>
                    <img src={bike} alt='logo' />
                    <div className="start-end">
                        <div className="start">
                            <p>Start</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>

                        <div class="square"></div>
                        <div className="end">
                            <p>End</p>
                            <p>10:30AM</p>
                            <p>20 Aug 2022</p>
                        </div>
                    </div>
                    <div className="edit">
                        <a className="start" href='/'>Start</a>
                        <a className="EandD" href='/'>Edit</a>
                        <a className="EandD" href='/'>Delete</a>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default Card;