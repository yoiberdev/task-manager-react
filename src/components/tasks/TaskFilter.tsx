import type { Task } from "../../Types/Task";
import { TASK_FILTERS, type TaskFilter as TaskFilterType } from "../../Types/TaskFilter";

type FilterOption = {
  key: TaskFilterType;
  label: string;
  count: number;
  color: string;
};

type TaskFilterProps = {
  currentFilter: TaskFilterType;
  onFilterChange: (filter: TaskFilterType) => void;
  tasks: Task[];
};

const TaskFilter = ({
  currentFilter,
  onFilterChange,
  tasks,
}: TaskFilterProps) => {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = tasks.filter((task) => !task.completed).length;

  const filters: FilterOption[] = [
    {
      key: TASK_FILTERS.ALL,
      label: "Todas",
      count: total,
      color: "bg-blue-500",
    },
    {
      key: TASK_FILTERS.PENDING,
      label: "Pendientes",
      count: pending,
      color: "bg-orange-500",
    },
    {
      key: TASK_FILTERS.COMPLETED,
      label: "Completadas",
      count: completed,
      color: "bg-green-500",
    },
  ];

  return (
    <div className="flex gap-2 mb-4">
      {filters.map(({ key, label, count, color }) => (
        <button
          key={key}
          onClick={() => onFilterChange(key)}
          className={`
            px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2
            ${
              currentFilter === key
                ? `${color} text-white shadow-lg`
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          <span>{count}</span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium
            ${
              currentFilter === key
                ? "bg-white/20 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
