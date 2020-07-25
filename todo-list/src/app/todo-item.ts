export enum Priority {
    High,
    Low,
    Normal
}

export interface TodoItem {
    id: number;
    description: string;
    priority: Priority;
}
