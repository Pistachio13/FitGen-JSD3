import ActContext from "./ActContext"
import { useState } from "react"
import Activity from "../../model/Activity"

export default function ActivitesContextProvider({ children }) {
    const [activities, setActivities] = useState([])
    const [editActivity, setEditActivity] = useState({})
    const [shouldShowEditor, setShouldShowEditor] = useState(false)
    const [deleteCard, setDeleteCard] = useState('')

    const removeItem = (id) => {
        console.log('remove item', id)
        const result = activities.filter((activities) => activities.id !== id)
        console.log('remove item2', result)
        setActivities(result)
    }


    const createActivity = (e,activity) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log('activites',activities)
        const raw = JSON.stringify({
            ...activity
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`/activities/create`, requestOptions)
            .then((res) => res.json())
            .then((res) => { console.log('success:', res) })
            .catch((err) => {
                console.error('error:', err)
            })
    }

    // const fetchActivities = async () => {
    //     fetch(`/activities`)
    //     .then((res) => res.json())
    //         .then((res) => { console.log('success:', res.map((a) => new Activity(a))) })
    //         .catch((err) => {
    //             console.error('error:', err)
    //         })
    // }


    const fetchActivities = async () => {
        fetch(`/activities`, {
            method: 'GET',   //original port = 3001
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json({
                activityName: res.activityName,
                startDate: res.startDate,
                endDate: res.endDate,
                description: res.description,
                id: res.id,
            }))
            .then((res) => { res.map((a) => new Activity(a)) })
            .catch((err) => {
                console.error('error:', err)
            })
    }

    // const submitButton = () => {
    //     const [response, setResponse] = useState(null);

    //     async function handleClick() {
    //       try {
    //         const data = { /* data to send to the backend */ };
    //         const response = await fetch('/api/endpoint', {
    //           method: 'POST',
    //           body: JSON.stringify(data),
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         });
    //         const responseData = await response.json();
    //         setResponse(responseData);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    // }

    const onUpdateActivity = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8080/activities/${editActivity.id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...editActivity }),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((res) => res.json())
            .then((res) => { console.log('success:', res) })
            .catch((err) => {
                console.error('error:', err)
            })
    }

    return (<ActContext.Provider value={{
        activities,
        setActivities,
        editActivity,
        setEditActivity,
        onUpdateActivity,
        shouldShowEditor,
        setShouldShowEditor,
        deleteCard,
        setDeleteCard,
        removeItem,
        fetchActivities,
        createActivity,
    }}
    >
        {children}
    </ActContext.Provider>)
}