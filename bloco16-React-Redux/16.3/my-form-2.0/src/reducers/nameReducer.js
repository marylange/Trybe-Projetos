import { CHANGE_DADOS } from '../action';

const INICIAL_STATE = {
  dados: {
    nome: '',
    email: '',
  }
};

const nameReducer = (state = INICIAL_STATE, action) => {
  if (action.type === CHANGE_DADOS) {
    return {
      ...state,
      dados: { ...state.dados, nome: action.infos },
    }
  }
  return state
};

export default nameReducer;