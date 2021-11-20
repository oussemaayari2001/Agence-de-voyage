import { Injectable } from '@angular/core';
import { Com } from '../destinationCommentaire/com';
import { Commentaire } from '../destinationCommentaire/commentaire';
import { Lesdates } from '../Models/lesdates';
import { Produit } from '../Models/produit';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitsService {
  NosProduits:Produit[]=[
    
    new Produit(0, "", "", 0, false,new Lesdates(new Date(0,0,0),new Date(0,0,0)),[new Commentaire("",new Com(""))]),
  ]
  getproduits(){return this.NosProduits;}
  getproduitsBypromo(){
    let p:Produit[]=[];
    for (const t of  this.NosProduits) {
     if (t.promo) {
       p.push(t);
     }    }
     return p;
  }

  constructor() { }
}
