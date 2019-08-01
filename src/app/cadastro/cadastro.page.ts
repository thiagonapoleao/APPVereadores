import { Component, OnInit } from '@angular/core';
//importa uma biblioteca para manipulacao de parametros
import { NovaPaginaPage } from '../nova-pagina/nova-pagina.page';
//imports para publicação de variaveis
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
	//cria variaveis para receber os dados da pagina
	      nome : any;
	     email : any;
	      nasc : any;
	      sexo : any; 
  navigation : NavigationExtras;
              //any PQ nao sei o que o usuario vai digitar e 
	            // nao vamos validar dados por enquanto

  //cria um controller para manipular parametros
  constructor(public navCtrl : NavController) {

  }

  ngOnInit() {
  }

  enviarCadastro(){
    //fara isso ao clicar no botao
    //passa os parametros para nova pagina
    //publica os parametros que serao enviados
    this.navigation = {
      queryParams : {
        nome  : this.nome,
        email : this.email,
        nasc  : this.nasc,
        sexo  : this.sexo
      }
    }
    this.navCtrl.navigateBack(['nova-pagina'], this.navigation);
  }

}
