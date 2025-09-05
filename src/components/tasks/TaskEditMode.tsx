import { Check, X } from "lucide-react";
import type { Task } from "../../Types/Task";
import { useState } from "react";

type TaskEditModeProps = {
  task: Task;
  onSave: (title: string) => void;
  onCancel: () => void;
};

const TaskEditMode = ({ task, onSave, onCancel }: TaskEditModeProps) => {
  const [editValue, setEditValue] = useState(task.title);

  const handleSaveClick = () => {
    const trimmedValue = editValue.trim();
    if (!trimmedValue) {
      onCancel();
      return;
    }

    if (trimmedValue !== task.title) {
      onSave(trimmedValue);
    } else {
      onCancel();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onCancel();
    } else if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  return (
    <div className="flex gap-2 w-full">
      <input
        id={`edit-task-${task.id}`}
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        autoFocus
        placeholder="Editar tarea"
      />
      <div className="flex gap-1">
        <button
          onClick={handleSaveClick}
          disabled={!editValue.trim()}
          className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
          aria-label="Guardar cambios"
        >
          <Check size={16} />
        </button>
        <button
          onClick={onCancel}
          className="px-2 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors text-sm"
          aria-label="Cancelar edición"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskEditMode;
