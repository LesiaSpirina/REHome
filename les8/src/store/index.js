import { createStore, compose, combineReducers, applyMiddleware} from 'redux'
import { profileReducer } from './profile/reducer'
import { chatMessangesReducer } from './chats&messages/reducers'
import thunk  from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    profile: profileReducer,
    chatsmessages: chatMessangesReducer

})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)