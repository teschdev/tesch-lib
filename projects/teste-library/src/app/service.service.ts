import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getRequest(endpoint: string, params?: {}): Observable<any> {
    return this.http.get(`${endpoint}`, this.buildHttpOptions(params)).pipe(debounceTime(500))
  }

  private buildHttpOptions(
    parametros?: {},
    tipoConteudo: string = null,
    tipoResposta: string = 'json'
  ) {
    let resposta = {};
    let headers = {};

    if (tipoConteudo) {
      headers = new HttpHeaders({
        'Content-Type': tipoConteudo
      });
    }

    resposta = {
      headers,
      params: new HttpParams({
        fromObject: parametros
      }),
      responseType: tipoResposta
    };

    return resposta;
  }
}
