export interface UserModel {
    id: number,
    email: string,
    password: string,
    role: 'admin' | 'customer' | 'user'
}