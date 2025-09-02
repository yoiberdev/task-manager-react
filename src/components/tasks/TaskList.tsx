import type { Task } from "../../Types/Task";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onUpdateTask: (task: Partial<Task>) => boolean;
  onDeleteTask: (id: number) => void;
  onCompletedTask: (id: number) => boolean;
};

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onCompletedTask }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-gray-500 text-lg py-12 text-center bg-gray-50 rounded-lg">
        No hay tareas pendientes
      </div>
    );
  }

  const isCountable = tasks.length !== 1 ? "s" : "";

  return (
    <div className="space-y-2">
      <p className="text-sm text-gray-600">
        {tasks.length} tarea{isCountable} pendiente{isCountable}
      </p>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} onDeleteTask={onDeleteTask} onCompletedTask={onCompletedTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
