import { Link } from "react-router"
import s from "./Character.module.css"

export const Character = ({ characterInfo }) => {
    return (
        <div key={characterInfo.id} className={s.character}>
            <Link to={`/characters/${characterInfo.id}`} className={s.characterLink}>
                {characterInfo.name}
            </Link>
            <img src={characterInfo.image} alt={`${characterInfo.name} avatar`} />
        </div>
    )
}