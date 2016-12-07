import {KeyValue} from './KeyValue'

export class GridColumn {
  value:string
  index:number
  isEditMode:boolean


//Dont need get and set because the props are public
//     get getEditModevalues():KeyValue[] {

//             return this.editModeValues 
//      }

//     set setEditModevalues(values:KeyValue[]) {
//         this.editModeValues = values
//     }


//   get getIsEditMode():boolean {

//             return this.isEditMode 
//      }

//     set setIsEditMode(value:boolean) {
//         this.isEditMode = value
//     }


//   get getEditModeDataUrl():string {

//             return this.editModeDataUrl 
//      }

//     set setEditModeDataUrl(value:string) {
//         this.editModeDataUrl = value
//     }

   static getEmptyIndexedColumn(index:number):GridColumn{
       
        return new GridColumn("",index,false)
    }


  constructor(value:string ,index:number,isEditMode:boolean) {
    this.value = value
    this.index = index
    this.isEditMode = isEditMode
 
  }
}