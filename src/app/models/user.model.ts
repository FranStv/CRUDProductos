export interface User {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    role:       Role;
    avatar:     string;
    creationAt: Date;
    updatedAt:  Date;
}

export enum Role {
    Admin = "admin",
    Customer = "customer",
}
