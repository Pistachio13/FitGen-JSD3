import ActContext from "./ActContext"
import { useState } from "react"

export default function ActivitesContextProvider({ children }) {
    const [activities, setActivities] = useState([])
    const [editActivity, setEditActivity] = useState({})
    const [shouldShowEditor, setShouldShowEditor] = useState(false)
    const [deleteCard, setDeleteCard] = useState('')


    const onUpdateActivity = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/activities/${editActivity.id}`, {
            method: 'PUT',
            body: JSON.stringify({ ...editActivity }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => res.json())
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
    }}
    >
        {children}
    </ActContext.Provider>)
}