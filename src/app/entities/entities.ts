export class Task {
    id: number;
    id_group: number;
    name: string;
    description: string;
    occur: number;
    freq: string;
    order: number;
    date_crea: Date;
    date_modif: Date;
    util: string;
    criticity: number;
}

export class Group {
    id: number;
    name: string;
    description: string;
    occur: number;
    freq: string;
    order: number;
    date_crea: Date;
    date_modif: Date;
    user: string;
    criticity: number;
    tasks: Task[];
}
