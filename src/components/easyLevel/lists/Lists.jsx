import React, { useState } from 'react'

export const Lists = () => {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask("");
    };

    const setEditing = (id, text) => {
        setEditingId(id)
        setNewTask(text)
    }

    const updateTask = () => {
        if (newTask.trim() === "") return;
        setTasks(
            tasks.map((task) =>
                task.id === editingId ? { ...task, text: newTask } : task
            )
        );
        setEditingId(null)
        setNewTask("");
    };

    const removeTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <div className='w-full h-full flex justify-center items-center gap-x-4'>
                <label className='text-gray-600'>Task:</label>
                <div className='flex flex-col text-left justify-center gap-y-2'>
                    <input
                        className='border border-purple-300 p-2'
                        placeholder='Write your task'
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        required
                    />
                </div>
                <div>
                    {
                        editingId ?
                            <button
                                className='px-3 py-2 bg-purple-300 border border-gray-500'
                                type='button'
                                onClick={updateTask}
                            >
                                Update
                            </button> :
                            <button
                                className='px-3 py-2 bg-purple-300 border border-gray-500'
                                type='button'
                                onClick={addTask}
                            >
                                Add
                            </button>
                    }
                </div>
            </div>

            <div className='w-full mt-4'>
                <ul className='flex flex-col items-center gap-y-2'>
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className='w-auto flex gap-x-2 items-center'
                        >
                            <span>{task.text}</span>
                            <button
                                onClick={() => setEditing(task.id, task.text)}
                                className='bg-yellow-400 px-3 py-1 rounded text-white'
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => removeTask(task.id)}
                                className='bg-red-400 px-3 py-1 rounded text-white'
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
