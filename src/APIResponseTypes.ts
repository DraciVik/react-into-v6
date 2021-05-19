export type Animal = "dog" | "cat" | "bird" | "reptyle" | "rabbit";

export interface Pet {
    id: number;
    name: string;
    animal: Animal;
    description: string;
    breed: string;
    images: string[];
    city: string;
    state: string;
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endindex: number;
    hasNext: boolean;
    pets: Pet[]
}