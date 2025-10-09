import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../model/project.model';
import { ProjetService } from '../service/projectService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-projet',
  imports: [FormsModule],
  templateUrl: './add-projet.html',
})
export class AddProjet {
  newProjet =new Projet();
  constructor(private ProjetService : ProjetService,private router : Router){
  }
  addProjet():void{
    this.ProjetService.addProjet(this.newProjet);
    alert("le projet "+this.newProjet.nomProjet+" ajouté avec succeé");
    this.newProjet=new Projet();
    this.router.navigate(['projets'])

  }
  
}
