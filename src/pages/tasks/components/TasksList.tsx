import TaskCard from "./TaskCard";
import { ITask } from "../../../models/Task";
import { cssArticle, cssSection } from "../../../utils/cssConsts";

interface Props {
    tasks: ITask[],
    removeTask: (id:number) => void,
}

function TasksList({ tasks, removeTask }: Props) {
    return (
        <section className={cssSection}>
            <article className={`${cssArticle} grid grid-cols-4 gap-8`}>
                {
                    tasks && tasks.length > 0
                        ?
                            tasks.map((task: ITask, index: number) =>
                                <TaskCard
                                    key={index}
                                    task={task}
                                    removeTask={removeTask}
                                />
                            )
                        : <p>No hay tareas registradas.</p>
                }
            </article>
        </section>
    );
}

export default TasksList;