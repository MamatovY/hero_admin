import HeroesList from '../heroesList/HeroesList';
import HeroesAddForm from '../heroesAddForm/HeroesAddForm';
import HeroesFilters from '../heroesFilters/HeroesFilters';

import './app.scss';

const App = () => {

    const submit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const text = e.target.text.value
        const element = e.target.element.value
        console.log(name)
        console.log(text)
        console.log(element)
    }

    return (
        <main className="app">
            <div className="content">
                <HeroesList />
                <div className="content__interactive">
                    <HeroesAddForm />
                    <HeroesFilters />
                </div>
            </div>
        </main>
    )
}

export default App;