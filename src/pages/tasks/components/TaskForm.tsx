import { ChangeEvent } from "react";
import { ITask } from "../../../models/Task";
import { cssBtnSecondary, cssBtnSucess, cssInput, cssSubTitle } from "../../../utils/cssConsts";

interface Props {
    handleChange: (target: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    newTask: () => void,
    task: ITask,
    showModal: () => void,
}

export default function TaskForm ({ handleChange, newTask, task, showModal }: Props):JSX.Element {
  return (
    <div className="modal">
        <div className="bg-white p-4 rounded-lg w-96 space-y-4 flex flex-col">
            <h2 className={`${cssSubTitle} text-black`} >Registrar tarea</h2>
            <input
                name="title"
                type="text"
                value={task.title}
                className={cssInput}
                placeholder="Titulo"
                onChange={e => { handleChange(e) }}
            />
            <textarea
                name="note"
                value={task.note}
                className={cssInput}
                onChange={e => { handleChange(e) }}
            ></textarea>
            <input
                type="date"
                name="date"
                value={task.date}
                className={cssInput}
                onChange={e => { handleChange(e) }}
            />
            <input
                name="time"
                type="number"
                placeholder="Hora"
                value={task.time}
                className={cssInput}
                onChange={e => { handleChange(e) }}
            />
            <div className="flex gap-2">
                <button
                    onClick={() => { newTask() }}
                    className={cssBtnSucess}
                >
                    Guardar
                </button>
                <button
                    onClick={() => { showModal() }}
                    className={cssBtnSecondary}
                >Cerrar</button>
            </div>
        </div>
    </div>
  )
}