import { useState, useEffect, ChangeEvent } from 'react';
import { ITask } from '../../../models/Task';
import { initialState } from '../util/utilTask';
import { toast } from 'sonner'

export const useTask = () => {
    const [modal, setModal] = useState(false);
    const [tasks, setTasks] = useState<ITask[]>([]);
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
        if(task && Object.entries(task).length === 0) { 
            toast('Por favor llenar el formulario.')
        } else {
            const newTasks: ITask[] = [...tasks, {...task, id: new Date().getTime()}]
            setTasks(newTasks)
            setTask(initialState)
            toast('Tarea creada con éxito.')
        }
    }

    const removeTask = (id:number) => {
        const newTasks: ITask[] = tasks.filter(task => task.id !== id);
        setTasks(newTasks)
        toast('Tarea eliminada.')
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
