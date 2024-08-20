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
    const [sortingAlgo, setSortingAlgo] = useState('textDes');
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

    function sortData() {
        const algoritm = {
            timeAsc: (a, b) => a.id - b.id,
            timeDes: (a, b) => b.id - a.id,
            colorAsc: (a, b) =>
                a.color < b.color ? -1 : a.color === b.color ? 0 : 1,
            colorDes: (a, b) =>
                b.color < a.color ? -1 : a.color === b.color ? 0 : 1,
            textAsc: (a, b) =>
                a.text < b.text ? -1 : a.text === b.text ? 0 : 1,
            textDes: (a, b) =>
                b.text < a.text ? -1 : a.text === b.text ? 0 : 1,
        };
        return sortingAlgo in algoritm
            ? taskList.sort(algoritm[sortingAlgo])
            : taskList.sort(algoritm.timeAsc);
    }

    // buvo galima ir su switch apsirasyti
    //     switch (sortingAlgo) {
    //         case 'timeAsc':
    //             return taskList.sort((a, b) => a.id - b.id);
    //         case 'timeDes':
    //             return taskList.sort((a, b) => b.id - a.id);
    //         case 'colorAsc':
    //             return taskList.sort((a, b) =>
    //                 a.color < b.color ? -1 : a.color === b.color ? 0 : 1
    //             );
    //         case 'colorDes':
    //             return taskList.sort((a, b) =>
    //                 b.color < a.color ? -1 : a.color === b.color ? 0 : 1
    //             );
    //         case 'textAsc':
    //             return taskList.sort((a, b) =>
    //                 a.text < b.text ? -1 : a.text === b.text ? 0 : 1
    //             );
    //         case 'textDes':
    //             return taskList.sort((a, b) =>
    //                 b.text < a.text ? -1 : a.text === b.text ? 0 : 1
    //             );
    //         default:
    //             return taskList;
    //     }
    // }

    function updateSorting(newAlgoName) {
        setSortingAlgo(newAlgoName);
    }

    window.addEventListener('keyup', (e) => {
        console.log(e.key);
    });

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
            <ListActions updateSorting={updateSorting} />
            <TaskList
                data={sortData()}
                updateTaskText={updateTaskText}
                updateTaskColor={updateTaskColor}
                updateTaskState={updateTaskState}
                removeTask={removeTask}
            />
        </main>
    );
}

export default App;

//  <p onClick={() => setCount((prevCount) => prevCount + 1)}>
//      Ištrintos užduotys: {count}
//  </p>;
