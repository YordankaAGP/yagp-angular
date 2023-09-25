import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ISupplier } from '../interfaces/i-supplier';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupplierService extends BaseService {
  private apiUrl = this.baseURL + '/suppliers';

  private headers = new HttpHeaders({
    'x-access-token': this.token,
  });

  constructor(private http: HttpClient) {
    super();
  }

  getSuppliers(): Observable<ISupplier[]> {
    return this.http
      .get<any>(`${this.apiUrl}`, { headers: this.headers })
      .pipe(map((response) => response));
  }
}
