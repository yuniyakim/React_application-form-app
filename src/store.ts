import {combineReducers} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {configureStore} from '@reduxjs/toolkit';

const reducer = combineReducers({
  form: reduxFormReducer,
});

const store = configureStore({reducer: reducer});

export default store;