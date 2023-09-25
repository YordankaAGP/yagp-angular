import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ITransaksi } from '../interfaces/i-transaksi';

@Injectable({
  providedIn: 'root',
})
export class TransaksiService extends BaseService {
  private apiUrl = this.baseURL + '/barang-in'; // Ganti dengan URL API sebenarnya jika digunakan

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-access-token': this.token,
  });

  constructor(private http: HttpClient) {
    super();
  }

  getTransaksi(): Observable<ITransaksi[]> {
    return this.http
      .get<any>(`${this.apiUrl}`, { headers: this.headers })
      .pipe(map((response) => response));
  }

  createTransaksi(transaksi: ITransaksi): Observable<ITransaksi> {
    const body = JSON.stringify(transaksi);
    return this.http
      .post<any>(`${this.apiUrl}`, body, { headers: this.headers })
      .pipe(map((res) => res));
  }
}
