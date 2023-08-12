import { Material } from "@models/material/material";
import { Reducer } from "redux";

interface MaterialState {
  materials: Material[];
  loading: boolean;
  error: string | null;
  material: Material;
}

enum ActionType {
  FETCH_MATERIALS_REQUEST = "FETCH_MATERIALS_REQUEST",
  FETCH_MATERIALS_SUCCESS = "FETCH_MATERIALS_SUCCESS",
  FETCH_MATERIALS_FAILURE = "FETCH_MATERIALS_FAILURE",
  FETCH_MATERIAL_REQUEST = "FETCH_MATERIAL_REQUEST",
  FETCH_MATERIAL_SUCCESS = "FETCH_MATERIAL_SUCCESS",
  FETCH_MATERIAL_FAILURE = "FETCH_MATERIAL_FAILURE",
  POST_MATERIAL_REQUEST = "POST_MATERIAL_REQUEST",
  POST_MATERIAL_SUCCESS = "POST_MATERIAL_SUCCESS",
  POST_MATERIAL_FAILURE = "POST_MATERIAL_FAILURE",
  PUT_MATERIAL_REQUEST = "PUT_MATERIAL_REQUEST",
  PUT_MATERIAL_SUCCESS = "PUT_MATERIAL_SUCCESS",
  PUT_MATERIAL_FAILURE = "PUT_MATERIAL_FAILURE",
  DELETE_MATERIAL_REQUEST = "DELETE_MATERIAL_REQUEST",
  DELETE_MATERIAL_SUCCESS = "DELETE_MATERIAL_SUCCESS",
  DELETE_MATERIAL_FAILURE = "DELETE_MATERIAL_FAILURE",
}

interface FetchMaterialsRequestAction {
  type: ActionType.FETCH_MATERIALS_REQUEST;
}

interface FetchMaterialsSuccessAction {
  type: ActionType.FETCH_MATERIALS_SUCCESS;
  payload: Material[];
}

interface FetchMaterialsFailureAction {
  type: ActionType.FETCH_MATERIALS_FAILURE;
  payload: string;
}

interface FetchMaterialRequestAction {
  type: ActionType.FETCH_MATERIAL_REQUEST;
}

interface FetchMaterialSuccessAction {
  type: ActionType.FETCH_MATERIAL_SUCCESS;
  payload: Material;
}

interface FetchMaterialFailureAction {
  type: ActionType.FETCH_MATERIAL_FAILURE;
  payload: string;
}

interface PostMaterialRequestAction {
  type: ActionType.POST_MATERIAL_REQUEST;
}

interface PostMaterialSuccessAction {
  type: ActionType.POST_MATERIAL_SUCCESS;
}

interface PostMaterialFailureAction {
  type: ActionType.POST_MATERIAL_FAILURE;
  payload: string;
}

interface PutMaterialRequestAction {
  type: ActionType.PUT_MATERIAL_REQUEST;
}

interface PutMaterialSuccessAction {
  type: ActionType.PUT_MATERIAL_SUCCESS;
}

interface PutMaterialFailureAction {
  type: ActionType.PUT_MATERIAL_FAILURE;
  payload: string;
}

interface DeleteMaterialRequestAction {
  type: ActionType.DELETE_MATERIAL_REQUEST;
}

interface DeleteMaterialSuccessAction {
  type: ActionType.DELETE_MATERIAL_SUCCESS;
}

interface DeleteMaterialFailureAction {
  type: ActionType.DELETE_MATERIAL_FAILURE;
  payload: string;
}

const initialState: MaterialState = {
  materials: [],
  loading: false,
  error: null,
  material: {} as Material,
};

type Action =
  | FetchMaterialsRequestAction
  | FetchMaterialsSuccessAction
  | FetchMaterialsFailureAction
  | FetchMaterialRequestAction
  | FetchMaterialSuccessAction
  | FetchMaterialFailureAction
  | PostMaterialRequestAction
  | PostMaterialSuccessAction
  | PostMaterialFailureAction
  | PutMaterialRequestAction
  | PutMaterialSuccessAction
  | PutMaterialFailureAction
  | DeleteMaterialRequestAction
  | DeleteMaterialSuccessAction
  | DeleteMaterialFailureAction;

const materialReducer: Reducer<MaterialState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.FETCH_MATERIALS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_MATERIALS_SUCCESS:
      return {
        ...state,
        loading: false,
        materials: action.payload,
      };
    case ActionType.FETCH_MATERIALS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.FETCH_MATERIAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        material: action.payload,
      };
    case ActionType.FETCH_MATERIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.POST_MATERIAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.POST_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.POST_MATERIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.PUT_MATERIAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.PUT_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.PUT_MATERIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionType.DELETE_MATERIAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.DELETE_MATERIAL_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.DELETE_MATERIAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export { materialReducer, ActionType }

