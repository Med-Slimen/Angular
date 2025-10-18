import { Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets';
import { AddProjet } from './add-projet/add-projet';
import { UpdateProjet } from './update-projet/update-projet';
import { RechercheParDepartement } from './recherche-par-departement/recherche-par-departement';

export const routes: Routes = [
    {path : "projets" , component:ProjetsComponent},
    {path : "AddProjet" , component:AddProjet},
    {path : "UpdateProjet/:id" , component:UpdateProjet},
    {path:"rechercheParDepartement",component:RechercheParDepartement},
    {path: "", redirectTo: "projets", pathMatch: "full"}
];
