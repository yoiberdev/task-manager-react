import { useState } from "react";
import type { Task } from "../Types/Task";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string): boolean => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return false;
    const newTask: Task = { id: Date.now(), title: trimmedTitle };
    setTasks((prev) => [...prev, newTask]);

    return true;
  };

  const finTaskById = (id: number): Task | undefined => {
    const task = tasks.find((task) => task.id === id);
    if (task) return task;
  };

  const updatedTask = (task: Task): boolean => {
    const { id, title } = task;
    if (!id || title.trim() === "") return false;

    const existingTask = finTaskById(id);
    if (!existingTask) return false;

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, title: title } : task))
    );

    return true;
  };

  const deleteTask = (id: number): boolean => {
    const existingTask = finTaskById(id);
    if (!existingTask) return false;
    setTasks((prev) => prev.filter((taskItem) => taskItem.id !== id));
    return true;
  };

  return { tasks, addTask, deleteTask, updatedTask, finTaskById };
};

export default useTasks;
