const initialState = {
  todos: []
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const newFormattedTask = { ...action.payload, id: state.todos.length + 1 };
      const fullTask = { ...state, todos: state.todos.concat(newFormattedTask) };
      localStorage.setItem("task-handler", JSON.stringify(fullTask));

      return fullTask;

    case "EDIT_TASK":
      const editedTask = [...state.todos];
      const index = editedTask.findIndex((task) => task.id === action.id);
      if (index != -1) {
        editedTask[index] = { ...action.payload, id: action.id };
      }
      const newEditedTask = { ...state, todos: editedTask };
      localStorage.setItem("task-handler", JSON.stringify(newEditedTask));
      return newEditedTask;

    case "DELETE_TASK":
      const deletedTask = {
        ...state,
        todos: state.todos.filter((todo) => todo.id != action.payload.id)
      };
      localStorage.setItem("task-handler", JSON.stringify(deletedTask));
      return deletedTask;
    default:
      return state;
  }
};
export default tasks;
