// App.js
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddTodoAction, EditTodoAction, RemoveTodoAction } from './action/todoActions';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo)
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== -1) {
      // dispatch(EditTodoAction({ id: todos[editIndex].id, todo }, editIndex));
      dispatch(EditTodoAction({ id: todos[editIndex].id, todo, index: editIndex }));

      setEditIndex(-1);
    } else {
      dispatch(AddTodoAction(todo));
    }
    setTodo('');
  }

  const RemoveHandler = (item) => {
    dispatch(RemoveTodoAction(item));
  }

  const EditHandler = (index) => {
    setEditIndex(index);
    setTodo(todos[index].todo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list app redux</h2>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder='Enter TODO'
            style={{
              padding: 10,
              borderRadius: 20,
              fontSize: 20,
              width: 400,
              border: "none"
            }}
          />
          <button type="submit" style={{ padding: 12, borderRadius: 25, fontSize: 15, marginLeft: 15 }}>
            {editIndex !== -1 ? 'Update' : 'Add'}
          </button>
        </form>

        <ul className="alltodos">
          {todos.map((item, index) => (
            <div style={{ display: "flex", alignItems: "center" }} key={item.id}>
              <li className='singleTodos'>
                <span className='todotext'>{item.todo}</span>
              </li>
              <button style={{
                borderRadius: 25,
                padding: 10,
                color: "#fff",
                backgroundColor: "green"
              }}
                onClick={() => EditHandler(index)}
              >
                Edit
              </button>
              <button style={{
                borderRadius: 25,
                padding: 10,
                color: "#fff",
                backgroundColor: "red"
              }}
                onClick={() => RemoveHandler(item)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
