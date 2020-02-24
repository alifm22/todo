export const delTodo = _id => {
  return {
    type: "DELETE_TODO",
    id: _id
  };
};
export default delTodo;
