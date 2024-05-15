import TasksActions from "./components/TasksActions";
import TasksList from "./components/TasksList";

function Tasks() {
    return (
        <main>
            <TasksActions />
            <TasksList />
        </main>
    );
}

export default Tasks;