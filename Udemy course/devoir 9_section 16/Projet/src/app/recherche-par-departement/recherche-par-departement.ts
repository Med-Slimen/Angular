import { Component, OnInit } from '@angular/core';
import { Projet } from '../model/project.model';
import { ProjetService } from '../service/projectService';
import { DatePipe } from '@angular/common';
import { Departement } from '../model/Departemet.model';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recherche-par-departement',
  imports: [DatePipe,FormsModule,RouterLink],
  templateUrl: './recherche-par-departement.html',
  styles: ``
})
export class RechercheParDepartement implements OnInit {
  projets!:Projet[];
  departements?:Departement[];
  IdDepart!:number;
  constructor(private projetService : ProjetService){
  }
  ngOnInit(): void {
    this.projets=[];
    this.departements=this.projetService.listerDepartement();
  }
  onChange():void{
    console.log(this.IdDepart);
    this.projets=this.projetService.rechercheParDepartement(this.IdDepart);
  }
  supprimerProjet(projet : Projet):void{
    this.projetService.supprimerProjet(projet);
    this.projets=this.projetService.rechercheParDepartement(this.IdDepart);
  }
}
