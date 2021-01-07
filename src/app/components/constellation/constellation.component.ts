import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Constellation, ConstellationService } from "../../services/constellation.service";

@Component({
  selector: 'app-constellation',
  templateUrl: './constellation.component.html',
  styleUrls: ['./constellation.component.css']
})
export class ConstellationComponent implements OnInit {

  constellation: any = {};

  constructor(private activatedRoute:ActivatedRoute, private constellationService: ConstellationService) {
    this.activatedRoute.params.subscribe(params => {
      let result = params['id'];
      this.constellation = this.constellationService.getConstellation(result);
    })
   }

  ngOnInit(): void {
  }

}
