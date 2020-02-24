export const addTodo = (_id, _title) => {
  return {
    type: "ADD_TODO",
    id: _id,
    title: _title
  };
};
export default addTodo;
