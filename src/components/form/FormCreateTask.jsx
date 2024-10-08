import { useState } from 'react';

export function FormCreateTask(props) {
    const { addTaskCallback } = props;
    const [task, setTask] = useState('');
    const [color, setColor] = useState('#ff0000');

    function handleFormSubmit(e) {
        e.preventDefault();
        if (task.trim() === '') {
            return;
        }
        addTaskCallback(task, color);
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                value={task}
            />
            <input
                onChange={(e) => setColor(e.target.value)}
                type="color"
                value={color}
            />
            <button type="submit">Create Task</button>
        </form>
    );
}
