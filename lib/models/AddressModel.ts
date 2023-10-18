export interface AddressModel {
    id: number,
    userId: number,
    type: 'is' | 'ev',
    addressLine: string,
    district: string,
    city: string,
    country: string,
    postCode: string,
}