const initialState = {
  todos: []
};

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // let newTodos;
      // newTodos = [...state];
      // newTodos.push(action.payload);
      // return newTodos;
      const newFormattedTask = { ...action.payload, id: state.todos.length + 1 };
      return { ...state, todos: state.todos.concat(newFormattedTask) };

    // case "DELETE_TASK":
    //   (newTodos = [...state]), (newTodos = newTodos.filter((todo) => todo.id != action.payload));
    //   return newTodos;

    default:
      return state;
  }
};
export default tasks;
