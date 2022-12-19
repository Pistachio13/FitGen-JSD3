import React, {  useContext } from "react";
import ActContext from "../Context/ActContext";
import ActivityIcon from "../ActivityIcon/ActivityIcon";


const Editor = () => {
    const { editActivity, setEditActivity, onUpdateActivity, setShouldShowEditor } = useContext(ActContext)
    const { activity, date, description, endDate, hour, minute } = editActivity

    const inputAcitivty = (e) => {
        const { value: activity } = e.target
        setEditActivity({ ...editActivity, activity })
    }
    const inputDurationHour = (e) => {
        const { value: hour } = e.target
        setEditActivity({ ...editActivity, hour })
    }
    const inputDurationMinute = (e) => {
        const { value: minute } = e.target
        setEditActivity({ ...editActivity, minute })
    }
    const inputDate = (e) => {
        const { value: date } = e.target
        setEditActivity({ ...editActivity, date })
    }
    const inputEnd = (e) => {
        const { value: end } = e.target
        setEditActivity({ ...editActivity, end })
    }
    const inputDescription = (e) => {
        const { value: description } = e.target
        setEditActivity({ ...editActivity, description })
    }



    return (
        <div className='container-all'>
            <div className="hiking-pic">
                <div className='background'></div>
                <h1>{activity}</h1>
                <ActivityIcon activity={activity || ''} />
                <form className='topInformation' onSubmit={(e) =>{
                    e.preventDefault()
                    onUpdateActivity(e)
                    setShouldShowEditor(false)
                    
                }}>
                    <div className='Activity form-Control'>
                        <label className='name'><span>Activity</span>
                            <select className='choices' name='Activities' id="Activities" onChange={inputAcitivty} value={activity} >
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
                        <button className='btn-confirm' type='submit' >Update</button>
                        <button className='btn-cancel' onClick={(e) => {
                            e.preventDefault()
                            setEditActivity({})
                            setShouldShowEditor(false)
                        }}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Editor;