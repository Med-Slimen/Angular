import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit';
import {Router } from '@angular/router';
@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.html',
})
export class AddProduit implements OnInit {
  newProduit = new Produit();
  msg! : String;
  constructor(private ProduitService : ProduitService,private route : Router){
  }
  ngOnInit(): void {
  }
  // addProduit():void{
  //   this.ProduitService.addProduit(this.newProduit);
  //   this.route.navigate(['produit']);
  // }
  addProduit(){
    this.ProduitService.addProduit(this.newProduit)
    .subscribe(prod => {
      console.log(prod);
      this.route.navigate(['produit']);
    });
}
}
