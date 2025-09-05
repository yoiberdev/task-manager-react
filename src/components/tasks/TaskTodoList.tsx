import useFilter from "../../hooks/useFilter";
import useTasks from "../../hooks/useTasks";
import type { Task } from "../../Types/Task";
import {
  TASK_FILTERS,
  type TaskFilter as TaskFilterType,
} from "../../Types/TaskFilter";
import { taskFilterFunction } from "../../utils/taskFilters";
import TaskFilter from "./TaskFilter";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

const TaskTodoList = () => {
  const { tasks, addTask, updatedTask, deleteTask, clompetedTask } = useTasks();
  const { currentFilter, setCurrentFilter, filteredItems } = useFilter<
    Task,
    TaskFilterType
  >(tasks, taskFilterFunction, TASK_FILTERS.ALL);

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-gray-800">Lista de tareas</h1>
      </header>

      <TaskForm onAddTask={addTask} />
      <TaskFilter
        currentFilter={currentFilter}
        onFilterChange={setCurrentFilter}
        tasks={tasks}
      />
      <TaskList
        tasks={filteredItems}
        onUpdateTask={updatedTask}
        onDeleteTask={deleteTask}
        onCompletedTask={clompetedTask}
      />
    </div>
  );
};

export default TaskTodoList;
