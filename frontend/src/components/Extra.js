import React, { useState } from "react";

const Extra = () => {
    const [isMarked, setIsMarked] = useState(false);

    const markTask = () => {
        setIsMarked(!isMarked);
    };

    return (
        <div>
            <input type="checkbox" checked={isMarked} onChange={markTask} />
            <button onClick={markTask}>Mark Task</button>
            <p>{isMarked ? " marked!" : " not marked."}</p>
        </div>
    );
};

export default Extra;