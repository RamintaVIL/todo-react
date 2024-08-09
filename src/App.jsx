import { FormCreateTask } from './components/form/Form';
import { ListActions } from './components/list-action/ListActions';
import { TaskList } from './components/tasks-list/TaskList';

function App() {
    return (
        <main>
            <h1>Todo</h1>
            <FormCreateTask />
            <ListActions />
            <TaskList />
        </main>
    );
}

export default App;
