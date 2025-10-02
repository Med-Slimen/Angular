import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../service/produit';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule],
  templateUrl: './update-produit.html',
  styles: ``
})
export class UpdateProduit implements OnInit {
  currentProduit! : Produit;
  constructor(private ProduitService : ProduitService ,private activatedRoute : ActivatedRoute
  ){

  }
  ngOnInit(): void {
    this.currentProduit=this.ProduitService.consulterProduit(this.activatedRoute.snapshot.params['id'])
  }
  updateProduit(){
    console.log(this.currentProduit)
  }
}
