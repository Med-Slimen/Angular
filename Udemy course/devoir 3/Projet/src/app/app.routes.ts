import { Routes } from '@angular/router';
import { ProjetsComponent } from './projets/projets';
import { AddProjet } from './add-projet/add-projet';

export const routes: Routes = [
    {path : "projets" , component:ProjetsComponent},
    {path : "AddProjet" , component:AddProjet},
    {path: "", redirectTo: "projets", pathMatch: "full"}
];
