import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  // Cas de formulaire basé sur template simple avec ngModel
  // titleToAdd = '';
  // priceToAdd = '';

  // Cas de formulaire reactive necessitant reactiveformmodule
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor(){}

  ngOnInit(){

  }

  // Cas de formulaire basé sur template simple avec ngModel
  // onSubmit(form: NgForm) {
  //   const newTitle = this.titleToAdd;
  //   const newPrice = this.priceToAdd;
  //   console.log('newTitle : ' + newTitle);
  //   console.log('newPrice : ' + newPrice);
  // }

  onSubmit(form: NgForm) {
      const newTitle = this.titleToAdd.value;
      const newPrice = this.priceToAdd.value;
      console.log('newTitle : ' + newTitle);
      console.log('newPrice : ' + newPrice);
    }
}
