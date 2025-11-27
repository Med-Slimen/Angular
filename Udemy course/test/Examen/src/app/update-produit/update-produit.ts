import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../service/produit-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule],
  templateUrl: './update-produit.html',
  styleUrl: './update-produit.css',
})
export class UpdateProduit implements OnInit {
  constructor(private produitService:ProduitService,private router:Router,private activatedRoute:ActivatedRoute){}
  cuurentProduit!:Produit;
  ngOnInit(): void {
    const id=this.activatedRoute.snapshot.params["id"];
    this.cuurentProduit=this.produitService.getAllProduit().find(prod=>prod.id==id)!
  }
  updateProd():void{
    this.produitService.updateProd(this.cuurentProduit);
    this.router.navigate(['produits']);
  }
}
