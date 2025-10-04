import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../model/project.model';
import { ProjetService } from '../service/projectService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-projet',
  imports: [FormsModule],
  templateUrl: './add-projet.html',
})
export class AddProjet {
  newProjet =new Projet();
  constructor(private ProjetService : ProjetService){
  }
  addProjet():void{
    this.ProjetService.addProjet(this.newProjet);
    alert(this.newProjet.nomProjet+" ajouté avec succeé");
    this.newProjet=new Projet();
  }
  
}
