import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
  styleUrl: './add-produit.css',
})
export class AddProduit {
  produit:Produit=new Produit();
  constructor(private produitService:ProduitService,private Router:Router){}
  addProd(prod:Produit):void{
    this.produitService.addProd(prod);
    this.Router.navigate(['produits']);
  }
}
