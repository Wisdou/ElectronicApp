import { Injectable } from '@angular/core';
import { HttpCustomService } from '../http/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class GenerateReportService {
  private controller: string = 'products';

  constructor(private httpService: HttpCustomService) { }

  getReport(reportType: number) {
    const method = 'report';
    const api = `api/${this.controller}/${method}?reportType=${reportType}`;
    return this.httpService.getBlobRequest(api);
  }
}
