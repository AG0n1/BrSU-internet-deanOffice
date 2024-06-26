import { Link } from "react-router-dom"

function StartPage() {
    return (
        <>
            <ul>
                <li className="list-elem">
                    <Link className="start-link" to="task2">Лаба 2</Link>
                </li>

                <li className="list-elem">
                    <Link className="start-link" to="task2">Лаба 3</Link>
                </li>

                <li className="list-elem">
                    <Link className="start-link" to="task2">Лаба 4</Link>
                </li>

                <li className="list-elem">
                    <Link className="start-link" to="task2">Лаба 5</Link>
                </li>
            </ul>
        </>
    )
}

export default StartPage