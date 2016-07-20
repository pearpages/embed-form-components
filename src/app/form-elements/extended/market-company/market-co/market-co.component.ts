import { Component } from '@angular/core';
import { Widget } from '../../../../abstract/widget';
import { FormService } from '../../../../services/form.service';
import { ApiService } from '../../../../services/api.service';
import { Fieldset } from '../../../../models/fieldset';
import { valid } from '../../../../interfaces/ivalidate';
import { SelectComponent } from '../../../core/select/select.component';

@Component({
  moduleId: module.id,
  selector: 'market-co',
  template: `<my-select [fieldset]="data" [multiple]="false"></my-select>`,
  directives: [SelectComponent]
})
export class MarketCoComponent extends Widget {

  constructor(protected form: FormService,protected apiService: ApiService) {
    super(apiService,form,'market-co','','getMarketCo');
  }

  validate(f:Fieldset) {
    return {valid:true,error: 'Please select at least one market-co'};
  }

}
