import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaleModel } from '../models/SaleModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private BASE_URL: string = environment.ApiEndPoint;

  public getSales(): Observable<Array<SaleModel>> {
    return this.httpClient.get<Array<SaleModel>>(`${this.BASE_URL}/saleDetail`);
  }

  public getSaleDetail(id: string): Observable<SaleModel> {
    return this.httpClient.get<SaleModel>(`${this.BASE_URL}/saleDetail/${id}`);
  }
}
