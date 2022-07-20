import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private paisService: PaisService ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(( { id } ) => this.paisService.getPaisPorId( id ))
      )
      .subscribe( resp => {})

    /* this.activatedRoute.params
    .subscribe( ({ id }) => {
       
      /* .subscribe( params => {

      } ) ....Hasta aca el segundo subscribe

      this.paisService.getPaisPorId( id )
        .subscribe( pais => {
          console.log( pais )
        })
    } ) */


  }

}
