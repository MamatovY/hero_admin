import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { filters, heroes } from '../reducers'

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({ type: action })
    }
    return next(action)
}
console.log(ReduxThunk);
const store = createStore(
    combineReducers({ heroes, filters }),
    compose(applyMiddleware(ReduxThunk, stringMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store

