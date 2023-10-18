export interface MovementModel {
    id: number,
    pay: true | false,
    userId: number,
    productId: number,
    quantity: number,
    price: number,
    amount: number,
    date: string
}

