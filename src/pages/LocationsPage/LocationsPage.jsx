import axios from "axios"
import { useEffect, useState } from "react"
import { Location } from "./Location/Location"

export const LocationsPage = () => {

    const [locations, setLocations] = useState(null)

    const [info, setInfo] = useState({
        count: 0,
        next: null,
        pages: 0,
        prev: null,
    })

    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setLocations(res.data.results)
                setInfo(res.data.info)
            })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/location")
    }, [])

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>Locations</h1>
            {
                locations !== null && locations.length && locations.map((location) => <Location key={location.id} location={location} />)
            }
            <div className="buttonContainer">
                <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
                    Назад
                </button>
                <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                    Вперед
                </button>
            </div>
        </div>

    )
}