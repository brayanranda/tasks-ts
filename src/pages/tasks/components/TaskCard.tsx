import { ITask } from "../../../models/Task"
import { cssBtnDanger, cssSubTitle } from "../../../utils/cssConsts"

interface Props {
    task: ITask,
    removeTask: (id:number) => void,
}

export default function TaskCard({ task, removeTask }: Props) {
    return (
        <div className="bg-slate-800 hover:bg-slate-600 p-4 rounded-md duration-300 transform hover:scale-110">
            <p className={cssSubTitle}>{task.title}</p>
            <p className="mb-4 text-lg">{task.note}</p>
            <div className="flex gap-2 justify-between mb-6">
                <p className="fond-bold">{task.date}</p>
                <p>{task.time} h</p>
            </div>
            <div>
                <button
                    onClick={() => { removeTask(task.id) }}
                    className={cssBtnDanger}
                >Borrar</button>
            </div>
        </div>
    )
}