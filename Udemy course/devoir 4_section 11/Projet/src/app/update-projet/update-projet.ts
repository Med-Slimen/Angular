import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../model/project.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjetService } from '../service/projectService';
import { Departement } from '../model/Departemet.model';

@Component({
  selector: 'app-update-projet',
  imports: [FormsModule,DatePipe],
  templateUrl: './update-projet.html',
})
export class UpdateProjet implements OnInit {
  currentProjet!:Projet;
  updatedId!:number;
  depart?:Departement[];
  constructor(private ProjetService : ProjetService,private activatedRoute : ActivatedRoute,private router : Router){

  }
  ngOnInit(): void {
    this.depart=this.ProjetService.listerDepartement();
    const idc=this.activatedRoute.snapshot.params["id"];
    this.currentProjet=this.ProjetService.findProjet(idc);
    this.updatedId=this.currentProjet.Depart.idDepart;
  }
  updateProduit():void{
    this.currentProjet.Depart=this.ProjetService.consulterDepart(this.updatedId);
    this.ProjetService.updateProjet(this.currentProjet);
    this.router.navigate(['projets']);
  }
}
