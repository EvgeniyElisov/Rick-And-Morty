import { useEffect, useState } from "react"
import axios from "axios"
import s from "./CharactersPage.module.css"
import { Character } from "../../common/components/Character/Character"


export const CharactersPage = () => {
    const [characters, setCharacters] = useState([])

    const [info, setInfo] = useState({
        count: 0,
        pages: 0,
        next: null,
        prev: null,
    })

    const [error, setError] = useState(null)


    const fetchData = (url) => {
        axios
            .get(url)
            .then((res) => {
                setCharacters(res.data.results)
                setInfo(res.data.info)
                setError(null)
            })
            .catch((err) => {
                setError(err.response.data.error)
            })
    }

    useEffect(() => {
        fetchData("https://rickandmortyapi.com/api/character")
    }, [])

    const nextPageHandler = () => {
        fetchData(info.next)
    }

    const previousPageHandler = () => {
        fetchData(info.prev)
    }

    const searchHandler = (event) => {
        const value = event.currentTarget.value
        fetchData(`https://rickandmortyapi.com/api/character?name=${value}`)
    }

    return (
        <div className={"pageContainer"}>
            <h1 className={"pageTitle"}>Characters</h1>
            <input type="search" className={s.search} onChange={searchHandler} placeholder="Search..." />
            {error && <div className="errorMessage">{error}</div>}
            {!error && characters.length && (
                <>
                    {
                        <div className={s.characters}>
                            {
                                characters.map((character) => <Character key={character.id} characterInfo={character} />)
                            }
                        </div>
                    }
                    <div className="buttonContainer">
                        <button className="linkButton" disabled={info.prev === null} onClick={previousPageHandler}>
                            Назад
                        </button>
                        <button className="linkButton" disabled={info.next === null} onClick={nextPageHandler}>
                            Вперед
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}