import { NgModule } from '@angular/core';

import { AllTeamsComponent } from './teams.all';
import { ApiService } from '../api/index';


// currently not using it
//it's made just for the test
@NgModule({
  imports: [],
  declarations: [AllTeamsComponent],
  exports: [AllTeamsComponent],
  providers: [ApiService]
})
export class TeamsModule { }