import { Component } from '@angular/core';
import { Projet } from '../model/project.model';
import { DatePipe } from '@angular/common';
import { ProjetService } from '../service/projectService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projet',
  imports: [DatePipe,RouterLink],
  templateUrl: './projets.html',
})
export class ProjetsComponent {
   projets!: Projet[];
  constructor(private ProjetService : ProjetService){
    this.projets=this.ProjetService.getProjets();
  }
  supprimerProjet(projet : Projet):void{
    this.ProjetService.supprimerProjet(projet);
  }
  
}
