import React from 'react';
import './Overall.css'
import The_FITGEN from '../image/The_FITGEN.png'
import Card from '../Card/Card';

const Overall = () => {

    let number = document.getElementById("number");
    let counter = 1;


    setInterval(() => {
        if (counter === 65) {
            clearInterval();
        } else {
            counter += 1
            number.innerHTML = counter + '%';
        }
    }, 30)

    return (
        <div>   <div className='column'>
            <div className='left-row'>
                <div className='week-card'>
                    <div className='health'>
                        <img src={The_FITGEN} alt='logo' /><span><h2>This week Progress</h2></span>
                    </div>

                    <div className='this-week'>
                        <h2>This week Progress</h2>
                    </div>

                    <div className='information'>
                        <div className='overall-info'>
                            <h2>1260</h2>
                            <p>cal.burn today</p>
                            <p>(Estimate)</p>
                        </div>

                        <div class="square"></div>

                        <div className='overall-info'>
                            <h2>8,590</h2>
                            <p>Total step/day</p>
                            <p>(Estimate)</p>
                        </div>

                        <div class="square"></div>

                        <div className='overall-info'>
                            <h2>Running</h2>
                            <p>is your favorite activity</p>
                            <p>(Estimate)</p>
                        </div>
                    </div>
                    <div className='rate'>
                        <div className='avg'>
                            <h1>80 km/week</h1>
                            <p>Total distance(km)</p>
                        </div>

                        <div className='avg'>
                            <h1>8.0 </h1>
                            <p>Avg Daily(km.)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-row'>
                <div className='first-card'>
                    <div className='header'>
                        <div className='topic'><h1>Activity</h1></div>

                        <div className='chart'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
                            </svg>

                            <div id='number'></div>

                        </div>
                        <div className='graph-all'>
                            <a className='graph-button' href='/'>Check activity</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className='third-card'>
                <div className='header'>
                    <div className='topic'><h1>Weight</h1></div>
                    <div className='past-weight'>
                        <h2 className='number-weight-one'>76 <span className='kilo'> k.</span></h2>
                    </div>

                    <div className='icon-arrow'>
                        <p>To</p>
                    </div>

                    <h2 className='number-weight-two'>70 <span className='kilo'> k.</span></h2>

                    <a className='graph-button' href='/'>Check Progress</a>
                </div>
            </div>
        </div>

        <Card />
        </div>

    )
}

export default Overall;