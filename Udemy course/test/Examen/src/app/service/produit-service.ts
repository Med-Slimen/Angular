import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!:Produit[];
  constructor() { 
    this.produits=[
      {id:1, nom:'Ordinateur', prix:2500},
      {id:2, nom:'Imprimante', prix:500},
      {id:3, nom:'Smartphone', prix:1500},
    ];
  }
  getAllProduit():Produit[]{
    return this.produits;
  }
  supprimerProd(prod : Produit):void{
    const index=this.produits.indexOf(prod);
    const conf=confirm("vous etes sur ?");
    if (conf) this.produits.splice(index,1);
  }
  addProd(prod:Produit):void{
    this.produits.push(prod);
  }
  updateProd(newProd:Produit):void{
    const index=this.produits.findIndex(prod=>prod.id=newProd.id);
    if(index>-1){
      this.produits.splice(index,1,newProd);
    }
  }
}
