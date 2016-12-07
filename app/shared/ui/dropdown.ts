import {Component,Input,Output,EventEmitter} from '@angular/core'
import {KeyValue} from '../models/index'
//import {FORM_DIRECTIVES,CORE_DIRECTIVES} from '@angular/common'

@Component({
selector:'dropdown',
templateUrl:'./app/shared/ui/key-value-dropdown.html',
//directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class KeyValueDropdown  { 

  // public test: KeyValue[]  = [
  //       { "value": 1, "label": "Table" },
  //       { "value": 2, "label": "Chair" },
  //       { "value": 3, "label": "Light" }
  //     ];

  // public selectedItem: KeyValue = this.test[0]

  @Input() items : KeyValue[]

  @Input() hasDefault : boolean

  @Output()
  select: EventEmitter<any>


   constructor() {
    this.select = new EventEmitter()
    this.hasDefault = true
  }

  selectItem(value:any) {
    this.select.emit(value);
  }

  static getBoleanDropDown():KeyValue[]{
     let kv :  KeyValue[] = [
        new KeyValue(0,false),
        new KeyValue(1,true)
        ]
    return kv
  }
      
    // onSelect(selectedValue:any) { 
    //     this.selectedItem = null;

    //     for (var i = 0; i < this.test.length; i++)
    //     {
    //       if (this.test[i].value == selectedValue) {
    //         this.selectedItem = this.test[i];
    //       }
    //     }
    // }

}