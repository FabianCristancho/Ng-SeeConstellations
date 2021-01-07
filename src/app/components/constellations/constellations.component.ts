import { Component, OnInit } from '@angular/core';
import { Constellation, ConstellationService } from "../../services/constellation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-constellations',
  templateUrl: './constellations.component.html',
  styleUrls: ['./constellations.component.css']
})
export class ConstellationsComponent implements OnInit {

  title:string = 'Constelaciones zodiacales';
  constellations:Constellation[] = [];

  constructor( private constellationService:ConstellationService, 
               private router:Router ) { 
   }

  ngOnInit(): void {
    this.constellations = this.constellationService.getConstellations();
  }

  seeConstellation(idx:number){
    this.router.navigate(['constellation', idx]);
  }

}
