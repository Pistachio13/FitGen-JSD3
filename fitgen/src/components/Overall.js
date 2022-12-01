import React from 'react';
import '../components/style/Overall.css'
import The_FITGEN from '../components/image/The_FITGEN.png'

const Overall = () => {
    return (
        <div>
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
                        <h1>Activity</h1>
                        <h1>Activity</h1>
                    </div>
                </div>
            </div>
            </div>


    )
}

export default Overall;