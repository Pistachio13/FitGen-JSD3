import ActContext from "./ActContext"
import { useState } from "react"

export default function ActivitesContextProvider ({children}) {
    const [activities, setActivities] = useState([])
    return (<ActContext.Provider value = {{activities,setActivities}}> {children} </ActContext.Provider>)
}