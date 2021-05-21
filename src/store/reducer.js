const initialState = {
  todos: []
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newFormattedTask = { ...action.payload, id: state.todos.length + 1 };
      return { ...state, todos: state.todos.concat(newFormattedTask) };

    case "EDIT_TASK":
      debugger;
      const editedTask = [...state.todos];
      const index = editedTask.findIndex((task) => task.id === action.id);
      if (index != -1) {
        editedTask[index] = { ...action.payload, id: action.id };
      }
      return { ...state, todos: editedTask };

    case "DELETE_TASK":
      return { ...state, todos: state.todos.filter((todo) => todo.id != action.payload.id) };

    default:
      return state;
  }
};
export default tasks;
