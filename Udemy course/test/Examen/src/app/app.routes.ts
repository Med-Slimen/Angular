import { Routes } from '@angular/router';
import { ProduitComponent } from './produit/produitComponent';
import { UpdateProduit } from './update-produit/update-produit';
import { AddProduit } from './add-produit/add-produit';

export const routes: Routes = [
    {path:"produits",component:ProduitComponent},
    {path:"updateProd/:id",component:UpdateProduit},
    {path:"addProduit",component:AddProduit},
    {path:"",redirectTo:"produits",pathMatch:"full"}
];
