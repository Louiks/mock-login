export type UserTO = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    modificationDate: string;
    creationDate: string;
    createdBy: string;
}

export type User = {
    id: number;
    fullName: string;
    email: string;
}

export type UserCredentials = { email: string; password: string }

export function fromUserTO(userTO: UserTO): User {
    return {
        id: userTO.id,
        fullName: `${userTO.firstName} ${userTO.lastName}`,
        email: userTO.email
    }
}
