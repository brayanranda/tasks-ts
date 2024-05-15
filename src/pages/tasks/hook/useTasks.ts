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
        if(task && !(Object.values(task).every(key => key))) {
            toast.error('Por favor llenar el formulario.')
        } else {
            setTasks([...tasks, {...task, id: new Date().getTime()}])
            toast.success('Tarea creada con éxito.')
            setTask(initialState)
        }
    }

    const removeTask = (id:number) => {
        const newTasks: ITask[] = tasks.filter(task => task.id !== id);
        setTasks(newTasks)
        toast.success('Tarea eliminada.')
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
