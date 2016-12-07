import {GridColumn} from './GridColumn'

export class GridRow {
  columns:GridColumn[]
  index:number
  rowKey:any
  isEditable:boolean
  isEditMode:boolean

//   get getIsInEditMode():boolean{
//       return this.isEditMode
//   }

//    set setIsInEditMode(value:boolean){
//       this.isEditMode = value;
//   }
  //TODO:add props like IsEditMode, EditModeType and t.n.

  constructor(columns:GridColumn[],index:number,rowKey:any,isEditable:boolean) {
    this.columns = columns
    this.index = index
    this.rowKey = rowKey
    this.isEditable = isEditable!=null? isEditable:false
    this.isEditMode = false
  }
}