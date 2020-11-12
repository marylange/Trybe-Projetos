import { REQUISICAO_BEM_SUCEDIDA, REQUISICAO_MAL_SUCEDIDA, LOADING  } from '../action/action';

const INICIAL_STATE = {
  load: false,
  payload: '',
};

const dadosReducer = (state = INICIAL_STATE, action) => {
  if (action.type === REQUISICAO_BEM_SUCEDIDA) {
    return {
      ...state,
      load: false,
      payload: action.payload[0],
    }
  }

  if (action.type === REQUISICAO_MAL_SUCEDIDA) {
    return {
      ...state,
      load: false,
      payload: action.error,
    }
  }

  if (action.type === LOADING) {
    return {
      ...state,
      load: true,
    }
  }
  return state;
}

export default dadosReducer;
