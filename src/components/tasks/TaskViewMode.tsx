import { FiEdit2 } from "react-icons/fi";
import type { Task } from "../../Types/Task";
import { Trash } from "lucide-react";
import { useState } from "react";

type TaskViewModeProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  onCompleted: (id: number) => boolean;
  textClass: () => string;
};

const TaskViewMode = ({
  task,
  onEdit,
  onDelete,
  onCompleted,
  textClass,
}: TaskViewModeProps) => {
  const [taskCompleted, setTaskCompleted] = useState(task.completed);

  const handleCompleted = (id: number) => {
    const success = onCompleted(id);

    if (!success) {
      return;
    }
    setTaskCompleted((prev) => !prev);
  };

  return (
    <>
      <span className={`flex-1 text-gray-800 ${textClass}`}>{task.title}</span>
      <div className="flex gap-2">
        <label className="px-2 p-1 text-blue-500 hover:bg-green-50 rounded transition-colors cursor-pointer">
          <input
            id={`task-checkbox-${task.id}`}
            type="checkbox"
            onChange={() => handleCompleted(task.id)}
            checked={taskCompleted}
            className="cursor-pointer"
          />
        </label>
        <button
          onClick={onEdit}
          className="px-2 py-1 text-blue-500 hover:bg-blue-50 rounded transition-colors"
          aria-label={`Editar tarea: ${task.title}`}
        >
          <FiEdit2 />
        </button>
        <button
          onClick={onDelete}
          className="px-2 py-1 text-red-500 hover:bg-red-50 rounded transition-colors"
          aria-label={`Eliminar tarea: ${task.title}`}
        >
          <Trash />
        </button>
      </div>
    </>
  );
};

export default TaskViewMode;
