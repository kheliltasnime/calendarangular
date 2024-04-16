export interface Employee{
    id? : number;
    firstName? : string;
    lastName? : string;
    phoneNumber? : string;
    email? : string;
    account_type? :string;
    job? :string;
    password? :string;
    status?: boolean;
    createdAt? : Date;
    updatedAt? : Date;
}