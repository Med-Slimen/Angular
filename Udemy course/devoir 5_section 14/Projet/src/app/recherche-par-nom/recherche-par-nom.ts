import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../service/projectService';
import { Projet } from '../model/project.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [DatePipe,FormsModule,CommonModule],
  templateUrl: './recherche-par-nom.html',
  styles: ``
})
export class RechercheParNom implements OnInit {
  nomProjet!: String;
  projets!: Projet[];
  allProjets!: Projet[];
  searchTerm!: string;
  constructor(private projetService : ProjetService){
    }
ngOnInit(): void {
  this.projetService.getProjets1().subscribe(proj => {
      console.log(proj);
      this.allProjets = proj;
    })

}
onKeyUp(filterText : string){
this.projets = this.allProjets.filter(item =>
item.nomProjet?.toLowerCase().includes(filterText));
}

}
