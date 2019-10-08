import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DashboardService {

  DASHBOARD_API = 'http://test-demo.aem-enersol.com/api/dashboard';

  constructor(private http: HttpClient) {

  }

  getData(): Promise<{ chartBar: any[], chartDonut: any[], tableUsers: any[] }> {

    return this.http.get<{ chartBar: any[], chartDonut: any[], tableUsers: any[] }>(this.DASHBOARD_API).toPromise();
  }
}
