import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constellation, ConstellationService } from '../../services/constellation.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constellations: Constellation[] = [];
  value:string = ' ';

  constructor( private activatedRoute:ActivatedRoute, 
               private constellationService:ConstellationService,
               private router:Router) {
    
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.constellations = this.constellationService.searchConstellations(params['value']);
      this.value = params['value'];
    })
  }

  seeConstellation(idx:number|undefined){
    this.router.navigate(['constellation', idx]);
  }

}
