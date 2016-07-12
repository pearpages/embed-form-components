import { Component, OnInit } from '@angular/core';
import { GroupsComponent } from '../groups/groups.component';
import { RegionsComponent } from '../regions/regions.component';
import { CountriesComponent } from '../countries/countries.component';

@Component({
  moduleId: module.id,
  selector: 'groups-countries-regions',
  templateUrl: 'groupscountriesregions.component.html',
  styleUrls: ['groupscountriesregions.component.css'],
  directives: [GroupsComponent,RegionsComponent,CountriesComponent]
})
export class GroupscountriesregionsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
