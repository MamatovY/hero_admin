import { useDispatch, useSelector } from "react-redux"
import { useHttp } from "../../hooks/http.hook"
import { heroesFetched, heroesFetching, heroesFetchingError, heroesFilter } from "../../actions";
const classNames = require('classnames')

const HeroesFilters = () => {
    const { filters } = useSelector(state => state);
    const dispatch = useDispatch()
    const { request } = useHttp()

    const onFilter = (filter) => {
        dispatch(heroesFetching())
        const param = filter === 'all' ? '' : `?element=${filter}`
        dispatch(heroesFilter(filter))
        request(`http://localhost:3001/heroes${param}`)
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))
    }


    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button
                        onClick={() => onFilter('all')}
                        className={classNames("btn btn-outline-dark", { active: filters === 'all' })}>
                        Все
                    </button>
                    <button
                        onClick={() => onFilter('fire')}
                        className={classNames("btn btn-danger", { active: filters === 'fire' })}>
                        Огонь
                    </button>
                    <button
                        onClick={() => onFilter('water')}
                        className={classNames("btn btn-primary", { active: filters === 'water' })}>
                        Вода
                    </button>
                    <button
                        onClick={() => onFilter('wind')}
                        className={classNames("btn btn-success", { active: filters === 'wind' })}>
                        Ветер
                    </button>
                    <button
                        onClick={() => onFilter('earth')}
                        className={classNames("btn btn-secondary", { active: filters === 'earth' })}>
                        Земля
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters