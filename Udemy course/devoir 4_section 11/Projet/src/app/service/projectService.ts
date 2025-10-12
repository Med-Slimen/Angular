import { Injectable } from '@angular/core';
import { Projet } from '../model/project.model';
import { Departement } from '../model/Departemet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  projets : Projet[];
  depart:Departement[];
  projet!:Projet;
  constructor(){
    this.depart=[{idDepart:1,nomDepart:"Informatique"},{idDepart:2,nomDepart:"Marketing"},{idDepart:3,nomDepart:"Finance"},{idDepart:4,nomDepart:"Design"}]
    this.projets=[
      {
        idProjet:1,nomProjet:"Creation app mobile",nomClient:"Ahmed",dateDeb:new Date("04/12/2025"),Depart:this.depart[0]
      },
      {
        idProjet:2,nomProjet:"Création du maquettes UI/UX",nomClient:"Mohamed",dateDeb:new Date("12/25/2025"),Depart:this.depart[3]
      },
      {
        idProjet:3,nomProjet:"Gestion du budget, comptabilité, facturation",nomClient:"Tijani",dateDeb:new Date("01/10/2025"),Depart:this.depart[2]
      }
  ];
  }
  getProjets():Projet[]{
    return this.projets;
  }
  addProjet(projet : Projet):void{
    this.projets.push(projet);
  }
  supprimerProjet(projet : Projet):void{
    const index =this.projets.indexOf(projet);
    if (index >-1) {
      let conf=confirm("vous etes sur ?")
      if (conf) {
        this.projets.splice(index,1);
      }
    }
  }
  findProjet(id : number):Projet{
    this.projet=this.projets.find(p=>p.idProjet==id)!;
    return this.projet;
  }
  updateProjet(nwProjet : Projet) : void{
    const index=this.projets.findIndex(p=>p.idProjet==nwProjet.idProjet);
    if (index>-1) {
      this.projets.splice(index,1,nwProjet);
    }
  }
  listerDepartement():Departement[]{
    return this.depart;
  }
  consulterDepart(id: number):Departement{
    return this.depart.find(dep => dep.idDepart==id)!;
  }
}
