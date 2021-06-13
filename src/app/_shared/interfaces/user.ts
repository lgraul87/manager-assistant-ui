export interface User {
    email: string;
    password?: string;
    role: Role;
}

export type Role = 'admin' | 'rrhh' | 'finance';