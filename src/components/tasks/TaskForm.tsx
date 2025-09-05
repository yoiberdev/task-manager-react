import { useState } from "react";

type TaskFormProps = {
  onAddTask: (title: string) => boolean;
};

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = onAddTask(inputValue);
    if (success) {
      setInputValue("");
    }
  };

  return (
    <form onClick={handleSubmit} className="space-x-2">
      <input
        id="new-task-input"
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="Escribir tarea"
        className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Agregar
      </button>
    </form>
  );
};

export default TaskForm;
