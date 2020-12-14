import { roleTypes } from '../types/roleTypes';

export default interface UserInterfaces {
    email: string;
    password: string;
    lastname: string;
    firstname: string;
    phoneNumber ? : string;

    dateNaiss: Date;
    role: roleTypes;

    //Méthodes de notre interface
    getAge(): Number;
    fullName(): string;
    insert(): Promise < any > ;
    update(): Promise < any > ;
    delete(): Promise < any > ;
}

