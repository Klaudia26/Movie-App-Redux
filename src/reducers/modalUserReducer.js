const modalUserReducer = (state = false, action) => {
  switch (action.type) {
    case 'OPEN_MODAL_USER':
      return true;
    case 'CLOSE_MODAL_USER':
      return false;
    default:
      return state;
  }
};

export default modalUserReducer;
