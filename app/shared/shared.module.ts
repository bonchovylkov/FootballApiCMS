// this was breaking the ngFor in the drop down component
// this is why i put the component in the modules and it worked

import { NgModule } from '@angular/core'

import { KeyValueDropdown } from './ui/index'
//import { KeyValue } from './models/index'

@NgModule({
  imports: [NgModule],
  declarations:[KeyValueDropdown],
  exports:[KeyValueDropdown],
  //providers: [ApiService]
})

export class SharedModule {

 }