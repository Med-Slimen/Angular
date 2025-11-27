import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit-service';
import { Produit } from '../model/produit.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-produit',
  imports: [RouterLink],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class ProduitComponent implements OnInit {
  produits!:Produit[];
  constructor(private prodService:ProduitService){
  }
  ngOnInit(): void {
    this.produits=this.prodService.getAllProduit();
  }
  supprimerProd(prod:Produit):void{
    this.prodService.supprimerProd(prod);
  }
}
