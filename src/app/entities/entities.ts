export class TaskDetail {
    description: string;
}

export class Task {
    id: number;
    name: string;
    criticity: number;
    detail: TaskDetail;
}

export class Group {
    id: number;
    name: string;
    tasks: Array<Task>;
}
