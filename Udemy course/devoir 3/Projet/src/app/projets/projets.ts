import { Component } from '@angular/core';
import { Projet } from '../model/project.model';
import { DatePipe } from '@angular/common';
import { ProjetService } from '../service/projectService';

@Component({
  selector: 'app-projet',
  imports: [DatePipe],
  templateUrl: './projets.html',
})
export class ProjetsComponent {
   projets!: Projet[];
  constructor(private ProjetService : ProjetService){
    this.projets=this.ProjetService.getProjets();
  }
}
