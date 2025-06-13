import React, { useState } from "react";
import axios from "axios";

const Filter = () => {
    const [searchId, setSearchId] = useState("");
    const [tasks, setTasks] = useState([]);

    const search = async () => {
        if (!searchId) 
            return;
        try {
            const res = await axios.get("https://localhost:3000/${searchId}/");
            setTasks([res.data]);
        } 
        catch (err) {
            console.error("Error", err);
        }
    };

    const filter = async (type) => {
        if (!type) 
            return;
        try {
            const res = await axios.get("https://localhost:3000/${type}/");
            setTasks(res.data);
        } 
        catch (err) {
            console.error("Error", err);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Search" value={searchId} onChange={(e) => setSearchId(e.target.value)}/>
            <button onClick={search}>Search</button>

            <div>
                <button onClick={() => filter(true)}>Completed</button>
                <button onClick={() => filter(false)}>Incomplete</button>
            </div>
        
            <div>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.task} - {task.completed ? "Completed" : "Incomplete"}
                    </li>
                ))}
            </div>

        </div>
    );
};

export default Filter;
