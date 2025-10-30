import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Projet } from '../model/project.model';
import { ProjetService } from '../service/projectService';
import { ActivatedRoute, Router } from '@angular/router';
import { Departement } from '../model/Departemet.model';

@Component({
  selector: 'app-add-projet',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './add-projet.html',
})
export class AddProjet implements OnInit {
  newProjet =new Projet();
  projets!:Projet[];
  depart?: Departement[];
  idDepart?:number;
  myForm!:FormGroup;
  constructor(private ProjetService : ProjetService,private router : Router,private formBuilder : FormBuilder){
  }
  ngOnInit(): void {
    this.projets=this.ProjetService.getProjets();
    console.log(this.projets);
    this.depart=this.ProjetService.listerDepartement();
    this.myForm=this.formBuilder.group({
      idProduit : ['',[Validators.required]],
      nomProjet : ['',[Validators.required,Validators.minLength(3)]],
      nomClient : ['',[Validators.required]],
      emailClient:['',[Validators.required,Validators.email]],
      dateDeb : ['',[Validators.required]],
      idDepart : ['',[Validators.required]],
    })
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
  idExist(idProjet : number):boolean{
    return this.projets.some(p=>p.idProjet==idProjet);
  }
}
