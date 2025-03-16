export const Location = ({ location }) => {
    return (
        <>
            <ul>
                <li>Название локации: <span className="bold">{location.name}</span></li>
                <li>Тип локации: <span className="bold">{location.type}</span></li>
                <li>Измерение, в котором находится местоположение: <span className="bold">{location.dimension}</span></li>
                <li>Количество персонажей, которых видели в данной локации: <span className="bold">{location.residents.length}</span></li>
            </ul>
            <hr />
        </>

    )
}