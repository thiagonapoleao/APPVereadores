import { Component, OnInit } from '@angular/core';
import { DadosAbertosService } from '../services/dados-abertos.service';
import { User } from './user.model';

@Component({
  selector: 'app-nossa-api',
  templateUrl: './nossa-api.page.html',
  styleUrls: ['./nossa-api.page.scss'],
})
export class NossaApiPage implements OnInit {
	users : User[];

  constructor( public servico : DadosAbertosService) {
  	
   }

  ngOnInit() {
    this.getDados();
  }

  getDados(){
  	this.servico.getAlluser().then((result : any) => {
  		this.users = result;
   	}).catch((error : any) => {
   		console.error("Erro: " + error);
   	});
  }

  filterList(evt){
    const searchTerm = evt.srcElement.value;
    if(!searchTerm){
      this.ngOnInit();
      return;
    }
    this.users = this.users.filter(
      termo =>{
        if(termo.name && searchTerm ){
          if(termo.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
            return true;
          }
          return false;
        }
      }
     );
  }

}
