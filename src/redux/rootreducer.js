import {combineReducers} from 'redux'
import userreducer from './user/userreducer';
const rootreducer=combineReducers({

    user:userreducer
})
export default rootreducer