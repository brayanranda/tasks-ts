import TaskForm from "./components/TaskForm";
import TasksActions from "./components/TasksActions";
import TasksList from "./components/TasksList";
import { useTask } from "./hook/useTasks";
import { Toaster } from 'sonner'

function Tasks() {
    const { task, tasks, handleChange, newTask, modal, showModal, removeTask } = useTask()

    return (
        <main className="relative">
            <Toaster />
            <div className="relative z-0">
                <TasksActions modal={modal} showModal={showModal} />
                <TasksList tasks={tasks} removeTask={removeTask} />
            </div>
            {
                modal &&
                    <TaskForm
                        task={task}
                        newTask={newTask}
                        showModal={showModal}
                        handleChange={handleChange}
                    />
            }
        </main>
    );
}

export default Tasks;