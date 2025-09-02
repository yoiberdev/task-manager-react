import useTasks from "../../hooks/useTasks";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskTodoList = () => {
  const { tasks, addTask, updatedTask, deleteTask, clompetedTask } = useTasks();

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Lista de tareas</h1>
      </header>

      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onUpdateTask={updatedTask}  onDeleteTask={deleteTask} onCompletedTask={clompetedTask} />
    </div>
  );
};

export default TaskTodoList;
