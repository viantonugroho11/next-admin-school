// import { createStore, applyMiddleware } from 'redux'
// import { reducer } from './student'

// // Middleware (jika diperlukan)
// // import thunk from 'redux-thunk';
// // import logger from 'redux-logger';

// const rootReducer = combineReducers({
//   students: studentReducer
// })

// export type RootState = ReturnType<typeof rootReducer>

// // Buat store Redux
// const store = createStore(reducer, applyMiddleware(/* thunk, logger */))

// export default store

// store.ts

import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { studentReducer } from './student'
import { authReducer } from './auth'
import { classReducer } from './class'
import { majorReducer } from './major'
import { teacherReducer } from './teacher'
import { courseReducer } from './course'
import { taskReducer } from './task'
import { scheduleReducer } from './schedule'

// Gabungkan semua reducer
const rootReducer = combineReducers({
  students: studentReducer,
  auth: authReducer,
  majors: majorReducer,
  class: classReducer,
  teachers: teacherReducer,
  coursers: courseReducer,
  tasks: taskReducer,
  materials: taskReducer,
  schedules: scheduleReducer
})

// Definisikan root state
export type RootState = ReturnType<typeof rootReducer>

// Buat store Redux
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
