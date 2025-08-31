import { FiEdit2 } from "react-icons/fi";
import type { Task } from "../../Types/Task";
import { Trash } from "lucide-react";

type TaskViewModeProps = {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
};
const TaskViewMode = ({ task, onEdit, onDelete }: TaskViewModeProps) => {
  return (
    <>
      <span className="flex-1 text-gray-800">{task.title}</span>
      <div className="flex gap-2">
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
