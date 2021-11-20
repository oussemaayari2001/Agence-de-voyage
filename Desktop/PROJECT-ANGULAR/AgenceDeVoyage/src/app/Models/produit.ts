import { Commentaire } from "../destinationCommentaire/commentaire";
import { Lesdates } from "./lesdates";

export class Produit {
    constructor(public id:number,public libelle:string,public photo:string,public prix:number,public promo:boolean,public date:Lesdates,public com:Commentaire[]){}
}
