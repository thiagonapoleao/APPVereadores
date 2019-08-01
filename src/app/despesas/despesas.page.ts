import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadosAbertosService } from '../services/dados-abertos.service';
import { Despesa } from './despesas.model';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.page.html',
  styleUrls: ['./despesas.page.scss'],
  providers: [ DadosAbertosService ]
})
export class DespesasPage implements OnInit {

	id : Number;
	despesas : Despesa[];

  constructor(private route : ActivatedRoute,
  	          public servico : DadosAbertosService,) {
  	//recebe os parametros da pagina de deputados
  	this.route.queryParams.subscribe( parametros => {
  		this.id = parametros["id"];
  	});
  	//faz a chamada de serviço em busca das despesas
  	this.getDespesas();
   }
  ngOnInit() {
  	this.getDespesas();
  }
  getDespesas(){
  	//chamada de serviço para buscar despesas
  	this.servico.getDespesas(this.id).then((result : any[]) =>{
  		this.despesas = result['dados'];
  	}).catch((error : any) =>{
  		console.error("erro: " + error);
  	});
  }
}
