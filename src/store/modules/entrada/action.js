// eslint-disable-next-line import/prefer-default-export
export function setEntrada(payload) {
  return {
    type: 'entrada/SET',
    payload,
  };
}

export function delEntrada(payload) {
  return {
    type: 'entrada/DEL',
    payload,
  };
}
