import { Component, OnInit } from '@angular/core';
//import da lib responsavel pelo recebimeto de parametros
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nova-pagina',
  templateUrl: './nova-pagina.page.html',
  styleUrls: ['./nova-pagina.page.scss'],
})
export class NovaPaginaPage implements OnInit {
	//replica aqui os atributos
	      nome : any;
	     email : any;
	      nasc : any;
	      sexo : any; 

  //aciona o construtor para receber dados
  constructor(private route : ActivatedRoute) {
  	this.route.queryParams.subscribe( parametros => {
  		this.nome = parametros["nome"];
  		this.email = parametros["email"];
  		this.nasc = parametros["nasc"];
  		this.sexo = parametros["sexo"];
  	});

  }

  ngOnInit() {
  }

}
