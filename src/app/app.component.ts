import { Component , OnInit} from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'labonneaffaire';
  message: string = "";
  // liste;

  // prix1: number = 80;
  // prix2: number = 230;
  // prix3: number = 15;

  // // Declaration de variable dataservice dans le constructeur en argument
  // constructor(private dataService: DataService){}

  ngOnInit(): void {
      // this.liste = this.dataService.listeArticles;
  }

  // onAffiche(arg: string){
  //   return this.message = "Merci d'avoir voté pour l'article : " + arg;
  // }

}
