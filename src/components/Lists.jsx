import React, { useState } from 'react'

export const Lists = () => {
        const [newTask, setNewTask] = useState("");

    const [tasks, setTasks] = useState([
        { id: 0, text: newTask },
     
    ])
    const addTask = () => {
        if (newTask.trim() === "") return;
        setTasks([...tasks, { id: Date.now(), text: newTask }])
        setNewTask("")
        console.log(tasks, newTask)

    }
    return (
        <>
            <div className='flex flex-col text-left justify-center items-start  gap-y-2'>
                <label className='text-gray-600'>Text:</label>
                <input
                    className='border border-purple-300 p-2'
                    placeholder='Write your task'
                    type="test"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    required
                />
                <button type='submit' onClick={addTask}>Add</button>
            </div>
            <div className='w-full'>
<ul>
    {
        tasks.map((task)=>
            <li key={task.id} >{task.text}</li>
        )
    }
</ul>
            </div>
        </>
    )
}
