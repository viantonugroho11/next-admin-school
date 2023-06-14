// // reducers.ts

// import { ActionTypes, Action } from '@actions/student/actions'
// import { StudentsResponse } from '@models/student/student'

// // Tipe State
// export interface State {
//   students: StudentsResponse | null
//   loading: boolean
//   error: string | null
// }

// // State awal
// const initialState: State = {
//   students: null,
//   loading: false,
//   error: null
// }

// // Reducer
// export const reducer = (state: State = initialState, action: Action): State => {
//   switch (action.type) {
//     case ActionTypes.FETCH_STUDENTS_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null
//       }
//     case ActionTypes.FETCH_STUDENTS_SUCCESS:
//       return {
//         ...state,
//         students: action.payload,
//         loading: false,
//         error: null
//       }
//     case ActionTypes.FETCH_STUDENTS_FAILURE:
//       return {
//         ...state,
//         students: null,
//         loading: false,
//         error: action.error
//       }
//     default:
//       return state
//   }
// }

// studentReducer.ts

import { Reducer } from 'redux';

// Definisikan tipe data untuk student
import { Student } from '@models/student/student';

// Definisikan tipe data untuk state
interface StudentState {
  students: Student[];
  loading: boolean;
  error: string | null;
}

// Definisikan action types
enum ActionType {
  FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST',
  FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS',
  FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE',
}

// Definisikan action creators
interface FetchStudentsRequestAction {
  type: ActionType.FETCH_STUDENTS_REQUEST;
}

interface FetchStudentsSuccessAction {
  type: ActionType.FETCH_STUDENTS_SUCCESS;
  payload: Student[];
}

interface FetchStudentsFailureAction {
  type: ActionType.FETCH_STUDENTS_FAILURE;
  payload: string;
}

type StudentAction =
  | FetchStudentsRequestAction
  | FetchStudentsSuccessAction
  | FetchStudentsFailureAction;

// Inisialisasi state awal
const initialState: StudentState = {
  students: [],
  loading: false,
  error: null,
};

// Definisikan reducer student
const studentReducer: Reducer<StudentState, StudentAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.FETCH_STUDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload,
      };
    case ActionType.FETCH_STUDENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { studentReducer, ActionType };

