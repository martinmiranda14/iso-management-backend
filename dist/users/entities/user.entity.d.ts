export declare enum UserRole {
    ADMIN = "admin",
    MANAGER = "manager",
    AUDITOR = "auditor",
    USER = "user"
}
export declare class User {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: UserRole;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
