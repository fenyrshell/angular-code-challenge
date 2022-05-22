import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class IdeaService {
  apiURL = `${environment.apiURL}/ideas`;
  dataSource = [];


  constructor(private http: HttpClient) { }


  public index(page = 1, per_page = 2, all = 0) {
    return this.http.get(this.apiURL + `?page=${page}&per_page=${per_page}&all=${all}`);
  }

  public show(id) {
    return this.http.get(this.apiURL + `/${id}`);
  }

  public store(data) {
    return this.http.post(this.apiURL + `/`, data);
  }

  public update(id, data) {
    return this.http.put(this.apiURL + `/${id}`, data);
  }

  public destroy(id) {
    return this.http.delete(this.apiURL + `/${id}`);
  }
}
