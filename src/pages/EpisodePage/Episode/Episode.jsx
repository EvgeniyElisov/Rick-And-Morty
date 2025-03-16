export const Episode = ({ episode }) => {
    return (
        <>
            <ul>
                <li>Эпизод: <span className="bold">{episode.episode}</span></li>
                <li>Название эпизода: <span className="bold">{episode.name}</span></li>
                <li>Дата выхода эпизода в эфир: <span className="bold">{episode.air_date}</span></li>
                <li>Список персонажей, которые были замечены в эпизоде: <span className="bold">{episode.characters.length}</span></li>
            </ul>
            <hr />
        </>

    )
}