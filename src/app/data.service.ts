import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listeArticles = [
    {
      id: 1,
      titreArticle: "Vélo",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/velo.jpeg",
      textAltImg: "Un vélo",
      dispo: false,
    },
    {
      id: 2,
      titreArticle: "TV",
      prixArticle: 230,
      description: "Très bonne résolution",
      urlImg: "../assets/images/tv.jpeg",
      textAltImg: "Une télévision",
      dispo: true,
    },
    {
      id: 3,
      titreArticle: "Jouet",
      prixArticle: 80,
      description: "Un super vélo tout terrain",
      urlImg: "../assets/images/jouet.jpeg",
      textAltImg: "Un vélo",
      dispo: true,
    }
  ]

  constructor() { }

  // Recuperation d'un objet article
  getArticle(id: number){
    const articles = this.listeArticles.find((a) => {
      return a.id == id;
    })
    return articles;
  }
}
