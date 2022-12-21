import { createStore, compose, combineReducers} from 'redux'
import { profileReducer } from './profile/reducer'
import { chatMessangesReducer } from './chats&messages/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    profile: profileReducer,
    chatsmessages: chatMessangesReducer

})
export const store = createStore(rootReducer, composeEnhancers())