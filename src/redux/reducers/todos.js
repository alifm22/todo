const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.title,
          completed: false
        }
      ];
    case "TOGGLE_COMPLETE":
      state = state.map(todo => {
        if (todo.id === action.itemID) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return state;
    case "DELETE_TODO":
      state = [...state.filter(todo => todo.id !== action.id)];
      return state;
    default:
      return state;
  }
};

export default todos;
