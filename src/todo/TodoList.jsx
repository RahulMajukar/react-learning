import React, { useState } from 'react';

export default function TodoList() {
    // State to manage the list of todos
    const [todos, setTodos] = useState([]);
    // State to manage the input field value for adding todos
    const [todoText, setTodoText] = useState('');

    // Function to add a new todo
    const addTodo = () => {
        // Check if the input field is not empty
        if (todoText.trim() !== '') {
            // Add new todo to the todos array with unique ID and text
            setTodos([...todos, { id: Date.now(), text: todoText }]);
            // Clear input field after adding todo
            setTodoText('');
        }
    };

    // Function to remove a todo based on todoId
    const removeTodo = (todoId) => {
        // Filter out the todo with the matching todoId
        setTodos(todos.filter((todo) => todo.id !== todoId));
    };

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {/* Map through todos array and render each todo */}
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {/* Display todo text */}
                        {todo.text}
                        {/* Button to remove todo, onClick calls removeTodo function */}
                        <button onClick={() => removeTodo(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            {/* Input field for adding new todos */}
            <input
                type="text"
                placeholder="Add Todo"
                value={todoText} // Controlled input value
                onChange={(e) => setTodoText(e.target.value)} // Update todoText state on change
            />
            {/* Button to add todo, onClick calls addTodo function */}
            <button onClick={addTodo}>Add</button>
        </div>
    );
}
