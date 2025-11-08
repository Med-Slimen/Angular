import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})

export class ProduitService {
   produits!: Produit[];
   apiURL: string = 'http://localhost:8090/produits/api';
  constructor(private http : HttpClient) {

    // this.produits = [
    //   {
    //     idProduit: 1,
    //     nomProduit: 'PC Asus',
    //     prixProduit: 3000.6,
    //     dateCreation: new Date('01/14/2011'),
    //   },
    //   {
    //     idProduit: 2,
    //     nomProduit: 'Imprimante Epson',
    //     prixProduit: 450,
    //     dateCreation: new Date('12/17/2010'),
    //   },
    //   {
    //     idProduit: 3,
    //     nomProduit: 'Tablette Samsung',
    //     prixProduit: 900.123,
    //     dateCreation: new Date('02/20/2020'),
    //   },
    // ];
  }
  listProduit() : Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);

  }
  addProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

//   supprimerProduit(produit : Produit) : void{
//   let conf=confirm("vous etes sur ?");
//   if (conf) {
//     const index=this.produits.indexOf(produit);
//   if (index>-1) {
//     this.produits.splice(index,1);
//   }
//   }
//  }
 supprimerProduit(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
}
//  consulterProduit(id:number): Produit{
//   return this.produits.find(p => p.idProduit == id)!;

// }
consulterProduit(id: number): Observable<Produit> {
  const url = `${this.apiURL}/${id}`;
  return this.http.get<Produit>(url);
}

// updateProduit(prod: Produit){
//  const index = this.produits.indexOf(prod, 0);
//  if (index > -1) {
//     this.produits.splice(index, 1);
//     this.produits.splice(index,0,prod);
//   }
//  }
 updateProduit(prod :Produit) : Observable<Produit>
{
  return this.http.put<Produit>(this.apiURL, prod, httpOptions);
}
}
