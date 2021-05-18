const initialState = {
  todos: []
};

const tasks = (state = initialState, action) => {
  let newTodos;
  switch (action.type) {
    case "ADD_TASK":
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case "DELETE_TASK":
      (newTodos = [...state]), (newTodos = newTodos.filter((todo) => todo.id != action.payload));
      return newTodos;

    default:
      return state;
  }
};
export default tasks;
