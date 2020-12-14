import UserInterfaces from '../interfaces/USerInterfaces';
import { roleTypes } from '../types/roleTypes';


export class UserModels implements UserInterfaces {
    email: string;
    password: string;
    lastname: string;
    firstname: string;
    phoneNumber ? : string;
    dateNaiss: Date;
    role: roleTypes;

    
    constructor(email: string, password: string, nom: string, prenom: string, tel: string, dateNaiss: string) {
        this.email = email;
        this.role = "User";
        this.lastname = nom;
        this.phoneNumber = tel;
        this.firstname = prenom;
        this.password = password;
        this.dateNaiss = new Date(dateNaiss);
    }

    setRole(role: roleTypes): void {
        this.role = role;
    }
    
    getAge(): Number {
        var ageDifMs = Date.now() - this.dateNaiss.getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    fullName(): string {
        return `${this.lastname} ${this.firstname}`;
    }
    insert(): Promise < any > {
        throw new Error('Method not implemented.');
    }
    update(): Promise < any > {
        throw new Error('Method not implemented.');
    }
    delete(): Promise < any > {
        throw new Error('Method not implemented.');
    }


}