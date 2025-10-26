import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Projet } from '../model/project.model';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProjetService } from '../service/projectService';
import { Departement } from '../model/Departemet.model';

@Component({
  selector: 'app-update-projet',
  imports: [FormsModule,DatePipe,ReactiveFormsModule],
  templateUrl: './update-projet.html',
})
export class UpdateProjet implements OnInit {
  currentProjet!:Projet;
  depart?:Departement[];
  myForm!:FormGroup;
  projets!:Projet[];
  constructor(private ProjetService : ProjetService,private activatedRoute : ActivatedRoute,private router : Router,private formBuilder : FormBuilder){

  }
  ngOnInit(): void {
    this.projets=this.ProjetService.getProjets();
    this.depart=this.ProjetService.listerDepartement();
    const idc=this.activatedRoute.snapshot.params["id"];
    this.currentProjet=this.ProjetService.findProjet(idc);
    this.myForm=this.formBuilder.group({
      idProjet : ['',[Validators.required]],
      nomProjet : ['',[Validators.required]],
      nomClient : ['',[Validators.required]],
      emailClient:['',[Validators.required,Validators.email]],
      dateDeb : ['',[Validators.required]],
      idDepart : ['',[Validators.required]],
    })
  }
  updateProduit():void{
    this.ProjetService.updateProjet(this.currentProjet);
    this.router.navigate(['projets']);
  }
}
