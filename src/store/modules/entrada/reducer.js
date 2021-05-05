const defaultState = [];

export default function entradas(state = defaultState, action) {
  switch (action) {
    case 'entrada/SET':
      const novaLista = [...state, action.payload];
      return novaLista;
    case 'entrada/DEL':
      const listaDel = [...state, action.payload];
      return listaDel;
    default:
      return state;
  }
}
