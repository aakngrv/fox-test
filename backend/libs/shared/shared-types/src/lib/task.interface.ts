export interface Task {
  taskId?: number;
  author?: boolean;
  executor?: boolean;
  userEmail?: string;
  description?: string;
  title?: string;
  createdAt?: Date;
}