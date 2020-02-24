export const toggleComplete = id => {
  return {
    type: "TOGGLE_COMPLETE",
    itemID: id
  };
};
export default toggleComplete;
