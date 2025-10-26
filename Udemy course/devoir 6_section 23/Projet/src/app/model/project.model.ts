import { Departement } from "./Departemet.model";

export class Projet{
    idProjet? : number;
    nomProjet?: String;
    nomClient?:String;
    dateDeb?:Date;
    Depart!:Departement;
    emailClient!:String;
}