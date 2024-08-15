import { Task } from './Task';

export function TaskList(params) {
    const { updateTaskText, updateTaskColor, updateTaskState, removeTask } =
        params;

    if (params.data.length === 0) {
        return <div className="list empty">Empty</div>;
    }
    return (
        <div className="list">
            {params.data.map((item) => (
                <Task
                    key={item.id}
                    data={item}
                    updateTaskText={updateTaskText}
                    updateTaskColor={updateTaskColor}
                    updateTaskState={updateTaskState}
                    removeTask={removeTask}
                />
            ))}
        </div>
    );
}
