import React from "react";
import bike from '../image/bike.png'
import hiking from '../image/hiking.png'

const ActivityIcon = ({ activity = 'default' }) => {
    let imgSrc
    switch (activity.toLocaleLowerCase()) {
        case 'bike':
            imgSrc = bike;
            break;
        case 'hiking':
            imgSrc = hiking;
            break;
            default: imgSrc = bike;
    }
    console.log(activity)
    return (
        <img src={imgSrc} width={96} height={96} style={{
            objectFit: 'contain'
        }} alt='activity-icons' />
    )
}

export default ActivityIcon

