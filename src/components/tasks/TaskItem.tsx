import type { Task } from "../../Types/Task";
import { useState } from "react";
import TaskEditMode from "./TaskEditMode";
import TaskViewMode from "./TaskViewMode";

type TaskItemProps = {
  task: Task;
  onUpdateTask: (task: Partial<Task>) => boolean;
  onDeleteTask: (id: number) => void;
  onCompletedTask: (id: number) => boolean;
};

const TaskItem = ({
  task,
  onDeleteTask,
  onUpdateTask,
  onCompletedTask,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  // const [isPending, setIsPending] = useState(task.completed);

  const handleStartEdit = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSaveEdit = (newTitle: string) => {
    const taskUpdated: Partial<Task> = { id: task.id, title: newTitle };
    const success = onUpdateTask(taskUpdated);
    if (success) setIsEditing(false);
  };

  const getBackgroundClass = () => {
    if (task.completed) {
      return "bg-green-50 border-green-200";
    }
    return "bg-white hover:bg-gray-50";
  };

  const getTextClass = () =>
    task.completed ? "line-through text-gray-500" : "text-gray-800";

  return (
    <li
      className={`flex justify-between items-center gap-2 p-3 border rounded transition-colors ${getBackgroundClass()}`}
    >
      {isEditing ? (
        <TaskEditMode
          task={task}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <TaskViewMode
          task={task}
          onEdit={handleStartEdit}
          onDelete={() => onDeleteTask(task.id)}
          onCompleted={onCompletedTask}
          textClass={() => getTextClass()}
        />
      )}
    </li>
  );
};

export default TaskItem;
