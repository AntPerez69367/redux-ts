import { ActionType } from "../action-types";
import { Action } from "../actions";
interface RepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoryState = INITIAL_STATE,
  action: Action
): RepositoryState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: true,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
