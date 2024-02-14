import {Injectable} from '@angular/core'
import {HttpClient } from '@angular/common/http'
import { Observable} from 'rxjs'
import {IProduct} from "../../data/interface";

@Injectable()
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {
  }

  products: IProduct[] = []

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3008/quiz/all', {
      headers: {
        'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlBvdGF0b0BtYWlsLnVhIiwiaWQiOjEsImZpcnN0TmFtZSI6IlBvdGF0byIsImlhdCI6MTcwNzkyMTE1OCwiZXhwIjoxNzA3OTIzMDU4fQ.v0xiw_0L1grGL2Q2To31705kOFEWJAnxt50rr8UlNBo'
      },
      params: {
        companyId: 1,
        revert: false,
        page: 1
      }
    })
  }

}
