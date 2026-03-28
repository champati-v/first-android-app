export enum TaskStatus {
  Done = "Done",
  InProgress = "In Progress",
  ToDo = "To Do",
}

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Tasks = {
  id: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Tasks[] = [
  {
    id: "1",
    title: "Buy groceries",
    time: "10 AM",
    status: TaskStatus.Done,
    icon: { name: "grid", backgroundColor: "#FF6B8A" },
  },
  {
    id: "2",
    title: "Meeting with team",
    time: "2 PM",
    status: TaskStatus.InProgress,
    icon: { name: "people-outline", backgroundColor: "#4ADE80" },
  },
  {
    id: "3",
    title: "Workout",
    time: "6 PM",
    status: TaskStatus.ToDo,
    icon: { name: "barbell-outline", backgroundColor: "#38BDF8" },
  },
  {
    id: "4",
    title: "Read a book",
    time: "8 PM",
    status: TaskStatus.ToDo,
    icon: { name: "book-outline", backgroundColor: "#38BDF8" },
  },
  {
    id: "5",
    title: "Call mom",
    time: "9 PM",
    status: TaskStatus.InProgress,
    icon: { name: "call-outline", backgroundColor: "#4ADE80" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To Do",
  "In Progress",
  "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
