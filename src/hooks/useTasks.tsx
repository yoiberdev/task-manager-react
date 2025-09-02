import { useState } from "react";
import type { Task } from "../Types/Task";

const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string): boolean => {
    const trimmedTitle = title.trim();
    if (trimmedTitle === "") return false;
    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);

    return true;
  };

  const findTaskById = (id: number): Task | undefined => {
    const task = tasks.find((task) => task.id === id);
    if (task) return task;
  };

  const updatedTask = (taskUpdated: Partial<Task>): boolean => {
    const { id, title } = taskUpdated;
    if (!id || title?.trim() === "") return false;
    const existingTask = findTaskById(id);
    if (!existingTask) return false;

    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...taskUpdated } : task))
    );

    return true;
  };

  const deleteTask = (id: number): boolean => {
    const existingTask = findTaskById(id);
    if (!existingTask) return false;
    setTasks((prev) => prev.filter((taskItem) => taskItem.id !== id));
    return true;
  };

  const clompetedTask = (id: number) => {
    const taskExisting = findTaskById(id);
    if (!taskExisting) return false;
    console.log("si llega", tasks);

    const newState = !taskExisting.completed;
    console.log("newstate", newState);

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: newState } : task
      )
    );

    return true;
  };

  return {
    tasks,
    addTask,
    deleteTask,
    updatedTask,
    findTaskById,
    clompetedTask,
  };
};

export default useTasks;
