export interface UserModel {
    id: number,
    email: string,
    password: string,
    role?: 'user' | 'customer' | 'admin' 
}