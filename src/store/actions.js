export const addTask = (todo) => ({
  type: "ADD_TASK",
  payload: todo
});

export const editTask = (id, todo) => ({
  type: "EDIT_TASK",
  id: id,
  payload: todo
});

export const deleteTask = (todo) => ({
  type: "DELETE_TASK",
  payload: todo
});
