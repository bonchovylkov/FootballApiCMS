import {GridColumn} from './GridColumn'
import {KeyValue} from './KeyValue'

export class HeaderGridColumn extends GridColumn{
    isDropDownEdit:boolean
    editModeDataUrl:string
     editModeValues: KeyValue[]
     editModePropValueName:string
     editModePropLabelName:string

    constructor(isDropDownEdit:boolean,editModeDataUrl:string,editModeValues: KeyValue[],  editModePropValueName:string, editModePropLabelName:string, value:string ,index:number,isEditMode:boolean){
        super(value ,index,isEditMode)
        this.isDropDownEdit = isDropDownEdit
        this.editModeDataUrl = editModeDataUrl
        this.editModeValues = (editModeValues? editModeValues: null)
        this.editModePropValueName=editModePropValueName? editModePropValueName:'id'
        this.editModePropLabelName=editModePropLabelName ? editModePropLabelName: 'name'
        
    }
}