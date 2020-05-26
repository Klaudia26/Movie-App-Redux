const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_USER' || 'UPDATE_USER':
      return action.payload;
    case 'LOGOUT_USER':
      return null;
    default:
      return state;
  }
};

export default userReducer;
