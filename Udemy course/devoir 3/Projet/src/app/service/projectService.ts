import { Injectable } from '@angular/core';
import { Projet } from '../model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  projets : Projet[];
  projet!:Projet;
  constructor(){
    this.projets=[
      {
        idProjet:1,nomProjet:"Creation app mobile",nomClient:"Ahmed",dateDeb:new Date("04/12/2025")
      },
      {
        idProjet:2,nomProjet:"Creation site web",nomClient:"Mohamed",dateDeb:new Date("12/25/2025")
      },
      {
        idProjet:3,nomProjet:"creation du base de donné",nomClient:"Tijani",dateDeb:new Date("01/10/2025")
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
}
