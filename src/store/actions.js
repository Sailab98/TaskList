export const addTask = (todo) => ({
  type: "ADD_TASK",
  payload: todo
});

export const editTask = (id) => ({
  type: "EDIT_TASK",
  payload: id
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id
});
