import { charAPI } from '../services/charAPI';

export const REQUISICAO_MAL_SUCEDIDA = 'REQUISICAO_MAL_SUCEDIDA';
export const REQUISICAO_BEM_SUCEDIDA = 'REQUISICAO_BEM_SUCEDIDA';
export const LOADING = 'LOADING';

export const receiveDadosFailure = (error) => ({
  type: REQUISICAO_MAL_SUCEDIDA,
  load: false,
  payload: error,
})

export const requestDados = () => ({
  type: LOADING,
  load: true,
});

export const receiveDadosSuccess = (payload) => ({
  type: REQUISICAO_BEM_SUCEDIDA,
  load: false,
  payload
});

export function reduxThunk(name) {
  return (dispatch) => {
    dispatch(requestDados(name));
    return charAPI(name)
      .then(
        (payload) => dispatch(receiveDadosSuccess(payload)),
        (error) => dispatch(receiveDadosFailure(error)),
      );
  };
};
