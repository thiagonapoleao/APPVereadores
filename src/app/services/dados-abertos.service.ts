import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DadosAbertosService {

  private api : String = 'https://dadosabertos.camara.leg.br/api/v2/';

  constructor(public http : Http) { }

  getDeputados(){
	return new Promise((resolve, reject) =>{
		let url = this.api + 'deputados';
		this.http.get(url)
		.toPromise()
        .then((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
	});
  }

  getDespesas(id : Number){
  	return new Promise((resolve, reject) => {
  		let url = this.api + 'deputados/' + id + '/despesas';
  		this.http.get(url)
  		.toPromise()
  		.then((result : any) => {
  			resolve(result.json());
  		},
  		(error) => {
  			resolve(error.json());
  		});
  	});
  }

  getAlluser(){
    return new Promise((resolve, reject) => {
      let url = 'http://localhost:8000/api/allUser'; //laravel
      this.http.get(url)
      .toPromise()
      .then((result : any) => {
        resolve(result.json());
      },
      (error) => {
        resolve(error.json());
      });
    });
  }

}
