export const TASK_FILTERS = {
  ALL: "all",
  COMPLETED: "completed",
  PENDING: "pending",
} as const;

export type TaskFilter = (typeof TASK_FILTERS)[keyof typeof TASK_FILTERS];
