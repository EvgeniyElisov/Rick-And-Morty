import axios from "axios"
import { useEffect, useState } from "react"
import { Episode } from "./Episode/Episode"

export const EpisodePage = () => {

    const [episodes, setEpisodes] = useState(null)

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
                setEpisodes(res.data.results)
                setInfo(res.data.info)
            })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/episode")
    }, [])

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const previousPageHandler = () => {
        fetchData(info.prev)
    }


    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>Episodes</h1>
            {
                episodes !== null && episodes.length && episodes.map((episode) => <Episode key={episode.id} episode={episode} />)
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