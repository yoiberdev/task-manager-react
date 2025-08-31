import type { Task } from "../../Types/Task";
import { useCallback, useState } from "react";
import TaskEditMode from "./TaskEditMode";
import TaskViewMode from "./TaskViewMode";

type TaskItemProps = {
  task: Task;
  onUpdateTask: (task: Task) => boolean;
  onDeleteTask: (id: number) => void;
};

const TaskItem = ({ task, onDeleteTask, onUpdateTask }: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleStartEdit = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);
  const handleSaveEdit = useCallback((newTitle: string) => {
    const taskUpdated: Task = { id: task.id, title: newTitle };
    const success = onUpdateTask(taskUpdated);
    if (success) setIsEditing(false);
  }, [task.id, onUpdateTask]);

  return (
    <li className="flex justify-between items-center gap-2 p-3 border rounded hober:bg-gray-50 transition-colors">
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
        />
      )}
    </li>
  );
};

export default TaskItem;
