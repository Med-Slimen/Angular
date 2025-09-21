import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './produit.html',
})
export class Produit {
  produits : String[];
  constructor(){
    this.produits=["PC Asus","Imprimante","TV","Ecran"]
  }
}
