interface OpenDays {
    monday: string[],
    tuesday: string[],
    wednesday: string[],
    thursday: string[],
    friday: string[],
    saturday: string[],
    sunday: string[],
}
export interface Restaurant {
    id: number,
    name: string,
    address: string,
    city: string,
    state: string,
    zip_code: string,
    latitude: number,
    longitude: number,
    phone: string,
    website: string,
    rating: number,
    hours: OpenDays
}