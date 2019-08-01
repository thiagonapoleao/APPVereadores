import { Component, OnInit } from '@angular/core';
import { DadosAbertosService } from '../services/dados-abertos.service';
import { Deputado } from './deputado.model';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-deputados',
  templateUrl: './deputados.page.html',
  styleUrls: ['./deputados.page.scss'],
  providers: [ DadosAbertosService ]
})
export class DeputadosPage implements OnInit {
  deputados : Deputado[];
  navigation : NavigationExtras;

  constructor( public servico : DadosAbertosService, 
               public navCtrl : NavController ) {
  	this.getDados();
  }
  getDados(){
  	this.servico.getDeputados().then((result : any[]) =>{
  		this.deputados = result['dados'];
  	}).catch((error : any) =>{
  		console.error("erro: " + error);
  	});
  }
  ngOnInit() {
  	this.getDados();
  }
  getDespesas(id : Number){
  	//chama a página de despesas
    this.navigation = {
      queryParams : {
        id  : id
      }
    }
    this.navCtrl.navigateBack(['despesa'], this.navigation);
  }
}
