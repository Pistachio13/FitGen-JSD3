import React, { useContext } from "react";
import bike from '../image/bike.png';
import './Card.css';
import Newchart from '../Newchart/Newchart'
import CardInfo from "../CardInfo/Cardinfo";
import ActivitiesContext from "../Context/ActContext"

const Card = ({ onAddPlanClick }) => {
    const { activities, setActivities } = useContext(ActivitiesContext)

    const removeItem = (id) => {
        console.log(id)
        const result = activities.filter((activities) => activities.id !== id)
        setActivities(result)
    }

    return (
        <div className="allcard">

            <div className="square-horizon"></div>

            <button className='addPlan-button' onClick={onAddPlanClick}>Add plan</button>

            <div className="mini-card">

                {activities.map(({ activity='', date, endDate, description, id }) =>
                    (<CardInfo activity={activity} date={date} endDate={endDate} description={description} id={id} removeItem={removeItem} />))}
            </div>

        </div>
    )
}

export default Card;