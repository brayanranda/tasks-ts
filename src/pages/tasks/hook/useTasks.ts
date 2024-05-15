import { useState, useEffect, ChangeEvent } from 'react';
import { ITask } from '../../../models/Task';
import { initialState } from '../util/utilTask';

export const useTask = () => {
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
        const newTasks: ITask[] = [...tasks, {...task, id: new Date().getTime()}]
        setTasks(newTasks)
    }

    const removeTask = (id:number) => {
        const newTasks: ITask[] = tasks.filter(task => task.id !== id);
        setTasks(newTasks)
    }

    useEffect(() => {
        getTask()
    }, []);
    
    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks))
    }, [tasks]);

    return { tasks, task, newTask, handleChange, removeTask, getTask };
}
