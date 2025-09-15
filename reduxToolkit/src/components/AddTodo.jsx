import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setInput, setEditingId } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();

  // 👇 read input and editingId directly from Redux
  const input = useSelector((state) => state.input);
  const editingId = useSelector((state) => state.editingId);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return; // ignore empty input

    if (editingId) {
      // update mode
      dispatch(updateTodo({ id: editingId, text: input }));
      dispatch(setEditingId(null)); // reset editing state
    } else {
      // add mode
      dispatch(addTodo(input));
    }

    dispatch(setInput("")); // clear input after action
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 
                   focus:border-indigo-500 focus:ring-2 
                   focus:ring-indigo-900 text-base outline-none 
                   text-gray-100 py-1 px-3 leading-8 
                   transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
      <button
        type="submit"
        className={`text-white border-0 py-2 px-6 rounded text-lg
                   ${editingId 
                     ? "bg-yellow-500 hover:bg-yellow-600" 
                     : "bg-indigo-500 hover:bg-indigo-600"}`}
      >
        {editingId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
