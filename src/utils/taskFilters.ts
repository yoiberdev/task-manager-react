import type { Task } from "../Types/Task";
import { TASK_FILTERS, type TaskFilter } from "../Types/TaskFilter";


export const taskFilterFunction = (task: Task, filter: TaskFilter): boolean => {
    switch (filter) {
        case TASK_FILTERS.ALL:
            return true;
        case TASK_FILTERS.COMPLETED:
            return task.completed;
        
        case TASK_FILTERS.PENDING:
            return !task.completed;
        
        default:
            return true;
    }
}