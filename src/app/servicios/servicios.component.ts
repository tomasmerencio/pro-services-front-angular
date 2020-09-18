import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api/api-data.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  prestador: any;

  constructor(private apiService: ApiDataService) { }

  ngOnInit(): void {
    this.datosDelPrestador();
  }

  datosDelPrestador() {
    this.apiService.prestador(1).subscribe((data: any) => {
      this.prestador = data;
    });
  }

}
