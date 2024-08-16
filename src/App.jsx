import { useEffect, useState } from 'react';
import { FormCreateTask } from './components/form/FormCreateTask.jsx';
import { ListActions } from './components/list-action/ListActions';
import { TaskList } from './components/tasks-list/TaskList';
// import { tasks } from './data/tasks.js';

function App() {
    const storageDataKey = 'todo-data';
    const storageIdKey = 'todo-last-id';
    const [taskList, setTaskList] = useState(readLocalData());
    const [id, setId] = useState(readLocalId());
    // const [count, setCount] = useState(0);
    // prideti nauja uzduoti

    // kodo eiliskumas
    // func, be antro parametro
    // pasileidžia kai yra perpiešiamas komponentas
    // useEffect(() => {
    //     console.log('Pasileido APP komponentas...');
    // });

    // func + []
    // antras parametras be reikšmių (tuščias masyvas)
    // pasileidžia tik pirmą kartą piešiant komponentą
    // useEffect(() => {
    //     console.log('APP - tuscias masyvas');
    // }, []);

    // func + [...]
    // antras parametras yra ne tuščias masyvas
    // į jį įeina "useState" parametrai, kurių reikšmėms kintant
    // reikia paleisti šią funkciją:

    useEffect(() => {
        localStorage.setItem(storageDataKey, JSON.stringify(taskList));
    }, [taskList]);

    useEffect(() => {
        localStorage.setItem(storageIdKey, JSON.stringify(id));
    }, [id]);

    function readLocalData() {
        const localData = localStorage.getItem(storageDataKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return [];
    }

    function readLocalId() {
        const localData = localStorage.getItem(storageIdKey);
        if (localData) {
            return JSON.parse(localData);
        }
        return 0;
    }

    function addTask(taskText, taskColor) {
        setTaskList((prev) => [
            ...prev,
            {
                id: id + 1,
                text: taskText,
                color: taskColor,
                state: 'todo',
            },
        ]);
        setId((prev) => prev + 1);
    }

    function updateTaskText(id, newText) {
        setTaskList((prev) =>
            prev.map((task) => ({
                ...task,
                text: task.id === id ? newText : task.text,
            }))
        );
    }

    function updateTaskColor(id, newColor) {
        setTaskList((prev) =>
            prev.map((task) => ({
                ...task,
                color: task.id === id ? newColor : task.color,
            }))
        );
    }

    function updateTaskState(id) {
        setTaskList((prev) =>
            prev.map((task) => ({
                ...task,
                state: task.id === id ? 'done' : task.state,
            }))
        );
    }

    function removeTask(id) {
        setTaskList((prev) => prev.filter((task) => task.id !== id));
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
            <TaskList
                data={taskList}
                removeTask={removeTask}
                updateTaskText={updateTaskText}
                updateTaskColor={updateTaskColor}
                updateTaskState={updateTaskState}
            />
        </main>
    );
}

export default App;

//  <p onClick={() => setCount((prevCount) => prevCount + 1)}>
//      Ištrintos užduotys: {count}
//  </p>;
