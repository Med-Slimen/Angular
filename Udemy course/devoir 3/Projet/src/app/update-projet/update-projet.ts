import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../model/project.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjetService } from '../service/projectService';

@Component({
  selector: 'app-update-projet',
  imports: [FormsModule,DatePipe],
  templateUrl: './update-projet.html',
})
export class UpdateProjet implements OnInit {
  currentProjet!:Projet;
  constructor(private ProjetService : ProjetService,private activatedRoute : ActivatedRoute,private router : Router){
    
  }
  ngOnInit(): void {
    const idc=this.activatedRoute.snapshot.params["id"];
    this.currentProjet=this.ProjetService.findProjet(idc);
  }
  updateProduit():void{
    this.ProjetService.updateProjet(this.currentProjet);
    alert(this.currentProjet.nomProjet+"Modifié avec succeé");
    this.router.navigate(['projets']);
  }
}
