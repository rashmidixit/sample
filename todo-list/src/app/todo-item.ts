export enum Priority {
    High = "High",
    Low = "Low",
    Normal = "Normal"
}

export interface TodoItem {
    description: string;
    priority: Priority;
}
