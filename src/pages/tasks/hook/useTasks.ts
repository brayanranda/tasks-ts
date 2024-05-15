import { useState, useEffect, ChangeEvent } from 'react';
import { ITask } from '../../../models/Task';
import { initialState } from '../util/utilTask';

export const useTask = () => {
    const [modal, setModal] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>([]);
    // {
    //     "id": 1,
    //     "title": "Título de ejemplo 1",
    //     "note": "Nota de ejemplo 1",
    //     "date": "2024-05-15",
    //     "time": "10:00"
    // },
    // {
    //     "id": 2,
    //     "title": "Título de ejemplo 2",
    //     "note": "Nota de ejemplo 2",
    //     "date": "2024-05-16",
    //     "time": "12:30"
    // },
    // {
    //     "id": 3,
    //     "title": "Título de ejemplo 3",
    //     "note": "Nota de ejemplo 3",
    //     "date": "2024-05-17",
    //     "time": "15:45"
    //   }
    const [task, setTask] = useState<ITask>(initialState);

    const getTask = () => {
        const getData = localStorage.getItem("tasks")
        const newTasks: ITask[] = getData && JSON.parse(getData)
        newTasks && newTasks.length > 0 && setTasks(newTasks)
    }

    const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({...task, [name]: value})
    }

    const newTask = ():void => {
        const newTasks: ITask[] = [...tasks, {...task, id: new Date().getTime()}]
        setTasks(newTasks)
        setTask(initialState)
    }

    const removeTask = (id:number) => {
        const newTasks: ITask[] = tasks.filter(task => task.id !== id);
        setTasks(newTasks)
    }

    const showModal = () => {
        setModal(!modal)
    }
    
    useEffect(() => {
        getTask()
    }, []);
    
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    return { tasks, task, newTask, handleChange, removeTask, getTask, modal, showModal };
}
