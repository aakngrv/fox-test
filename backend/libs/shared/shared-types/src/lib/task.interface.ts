export interface Task {
  taskId?: number;
  author?: string;
  executor?: string;
  userEmail?: string;
  description?: string;
  title?: string;
  createdAt?: Date;
}