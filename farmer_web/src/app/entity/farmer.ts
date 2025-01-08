export class Farmer {
    id!:number;
    firstName!: string;
    lastName!: string;
    email!:string;
    gender!:string;
    married!:boolean;
    country!:string;
    address: {
        city: string;
        street: string;
        pinCode: string;
    }= {
        city: '',
        street: '',
        pinCode: ''
    };
}
