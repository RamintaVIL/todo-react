import { useState } from 'react';
import { FormCreateTask } from './components/form/FormCreateTask.jsx';
import { ListActions } from './components/list-action/ListActions';
import { TaskList } from './components/tasks-list/TaskList';
import { tasks } from './data/tasks.js';

function App() {
    const [taskList, setTaskList] = useState(tasks);
    // const [count, setCount] = useState(0);
    // prideti nauja uzduoti
    function addTask(taskText) {
        setTaskList((prev) => [
            ...prev,
            {
                text: taskText,
            },
        ]);
    }

    function removeTask(taskText) {
        setTaskList((prev) => prev.filter((task) => task.text !== taskText));
    }

    return (
        <main>
            <h1>Todo</h1>
            <div>
                <p>Viso užduočių: {taskList.length}</p>
                <p>Neatliktos užduotys: {taskList.length}</p>
                <p>Atliktos užduotys:</p>
                <p>Ištrintos užduotys:</p>
            </div>
            <FormCreateTask addTaskCallback={addTask} />
            <ListActions />
            <TaskList data={taskList} removeTask={removeTask} />
        </main>
    );
}

export default App;

//  <p onClick={() => setCount((prevCount) => prevCount + 1)}>
//      Ištrintos užduotys: {count}
//  </p>;
