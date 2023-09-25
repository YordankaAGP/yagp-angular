import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected baseURL = 'https://c701-223-255-229-67.ngrok-free.app';
  protected token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFzZEBnbWFpbC5jb20iLCJ1c2VySWQiOiI2NTEwZWQ4ODM2NzEzM2ZkNmQyMzFlZDEiLCJpYXQiOjE2OTU2MDg3NDEsImV4cCI6MTcwMjgwODc0MX0.H670Yub5CjkJv21TZzjTUCOXhPbPEs3GAieGzEe_DRo';

  constructor() {}
}
