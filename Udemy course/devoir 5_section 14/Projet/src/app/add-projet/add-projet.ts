import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Projet } from '../model/project.model';
import { ProjetService } from '../service/projectService';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../model/Departemet.model';

@Component({
  selector: 'app-add-projet',
  imports: [FormsModule],
  templateUrl: './add-projet.html',
})
export class AddProjet implements OnInit {
  newProjet =new Projet();
  depart?: Departement[];
  idDepart?:number;
  constructor(private ProjetService : ProjetService,private router : Router){
  }
  ngOnInit(): void {
    this.depart=this.ProjetService.listerDepartement();
  }
  addProjet():void{
    if (this.idDepart) {
      this.newProjet.Depart=this.ProjetService.consulterDepart(this.idDepart);
      this.ProjetService.addProjet(this.newProjet);
      alert("le projet "+this.newProjet.nomProjet+" ajouté avec succeé");
      this.newProjet=new Projet();
      this.router.navigate(['projets'])
    }
    else{
      alert("Choisir une Departement");
    }
    
  }
  
}
