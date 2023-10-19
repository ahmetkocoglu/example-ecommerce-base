import { UserModel } from "models/UserModel";

export const users: Array<UserModel> = [
    { id: 1, email: "user@xyz.com", password: "P@ssw0rd", role: "user" },
    { id: 2, email: "customer@xyz.com", password: "P@ssw0rd", role: "customer" },
    { id: 3, email: "admin@xyz.com", password: "P@ssw0rd", role: "admin" }
];