import { Component, OnInit } from '@angular/core';
import { SaleService } from 'src/app/services/sale.service';
import { SaleModel } from 'src/app/models/SaleModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  list: Array<SaleModel>;

  constructor(
    private saleService: SaleService,
  ) { }

  ngOnInit() {
    this.getSales();
  }

  private getSales(): void {
    this.saleService
      .getSales()
      .subscribe(
        (response) => {
          this.list = response;
        },
        (error: HttpErrorResponse) => {
          console.log('Ocurrio un error');
        }
      ).add(() => {
      });
  }

}
