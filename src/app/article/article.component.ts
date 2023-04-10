import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12;
  // textAltImg: string = "Titre alternative de l'image";
  // urlImg: string = "https://via.placeholder.com/400x250";
  totalNbrLike: number = 0;
  comment: string = "Ceci est un commentaire";
  jaime: boolean = true;

  // Decorateur reception des données depuis le composent parent App
  @Input() titreArticle: string;
  @Input() prixArticle: number;
  @Input() textAltImg: string;
  @Input() urlImg: string;
  @Input() description: string;
  @Input() dispo: boolean = false;
  @Input() idArticle: number;

  // Decorateur pour la transmission des données vers le composent parent App
  // info est une instance de EventEmitter typé en string
  @Output() info = new EventEmitter<string>();

  constructor(){}

  ngOnInit():void{

  }

  onLike() {
    if (this.jaime === true) {
      this.totalNbrLike++;
      this.jaime = false;
    } else {
      this.totalNbrLike--;
      this.jaime = true;
    }
    // Info envoyera le nom de l'article au composant parent
    this.info.emit(this.titreArticle);
  }

  getColor() {
    if (this.dispo === true) {
      return "green"
    } else {
      return "red"
    }
  }
}
