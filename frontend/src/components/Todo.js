import React, { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await axios.get("https://localhost:3000/");
            setTasks(res.data);
        } 
        catch (err) {
            console.error("Error", err);
        }
    };

    const addTask = async () => {
        if (!title) 
            return;
        try {
            await axios.post("https://localhost:3000/", {task: title,completed: false});
            setTitle("");
            fetchTasks();
        } 
        catch (err) {
            console.error("Error", err);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete("https://localhost:3000/${id}/");
            fetchTasks();
        } 
        catch (err) {
            console.error("Error", err);
        }
    };
    
    return (
        <div>
            <input type="text" placeholder="Enter" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button onClick={addTask}>Add</button>
        
            <div>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.task}
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Todo;
