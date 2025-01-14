export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
}

export interface Todo {
    id?: number;
    title: string;
    content: string;
    author_id: number;
}
