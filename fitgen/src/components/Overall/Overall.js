import React from 'react';
import './Overall.css'
import The_FITGEN from '../image/The_FITGEN.png'
import Card from '../Card/Card';
import Schedule from '../Schedule/Schedule';
import { useState, useEffect,useContext } from 'react';
import GraphContext from '../Context/GraphContext';
import Chart from 'react-apexcharts'

const Overall = () => {
    const [shouldShowPopup,setShouldShowPopup] = useState(false)

    useEffect(() => {
        console.log(shouldShowPopup)
    },[shouldShowPopup])

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

                        <div className="square"></div>

                        <div className='overall-info'>
                            <h2>8,590</h2>
                            <p>Total step/day</p>
                            <p>(Estimate)</p>
                        </div>

                        <div className="square"></div>

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

            
            {/* Chart*/}
            <div className='donut-chart'>
            <React.Fragment>
            <h2>Activity</h2>
            <div className='container-fluid mt-3 mb-3' id='donut-chart'>
                <Chart id="activity-chart"
                    type='donut'
                    width={450}
                    height={300}
                    series={[20, 67, 89, 34, 43]}

                    options={{
                        labels:['Walking','Running','Swimming','Hiking','Cycling'],

                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total:{
                                            show: true,
                                            showAlways:true,
                                            fontSize: 30,
                                            color: 'red'

                                        }
                                    }
                                }
                            }
                        },
                        dataLabels:{
                            //enabled:false,
                        }
                    }}
                />
            </div>
        </React.Fragment>
            </div>
            {/*
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

                            <div id='number'>{number}%</div>

                        </div>
                        <div className='graph-all'>
                            <a className='graph-button' href='/'>Check activity</a>
                        </div>
                    </div>
                </div>


            </div>
    */}
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
            <Card onAddPlanClick={() => {setShouldShowPopup(true)}} />
            {shouldShowPopup && <Schedule onCloseHandler={ () =>  {setShouldShowPopup(false)}}/> }
        </div>

    )
}

export default Overall;