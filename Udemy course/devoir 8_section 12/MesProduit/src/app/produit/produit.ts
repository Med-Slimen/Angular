import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './produit.html',
})
export class ProduitComponent implements OnInit {
  produits! : Produit[];
  constructor(private produitService : ProduitService){
    // this.produits=produitService.listProduit()
  }
 ngOnInit(): void {
  this.chargerProduits();
 }
 chargerProduits(){
    this.produitService.listProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
});
 }
//  supprimerProduit(produit : Produit) : void{
//   this.produitService.supprimerProduit(produit);
//  }
supprimerProduit(p: Produit)
{
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
  console.log("produit supprimé");
  this.chargerProduits();
  });
} 
 
}
