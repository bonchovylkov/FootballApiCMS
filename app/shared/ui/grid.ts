import {Component,Input,Output,EventEmitter, OnChanges,SimpleChanges} from '@angular/core'
import {KeyValue,GridRow,GridColumn,HeaderGridColumn} from '../models/index'
import  {ApiService} from '../../api/index'

@Component({
    selector:'grid',
    templateUrl:'./app/shared/ui/grid.html',
    providers:[ApiService]
    
})
export class DynamicGrid implements OnChanges{ 

//if there is difference in the columns count i equalize them with empty cells
ngOnChanges(changes: SimpleChanges){
    console.log("ngAfterContentInit called")

    // //interesting
    // console.log(changes)
    // //find the max columns count
    // if(changes['rows']){
    //     let maxColumnsCount = 0;
    //     for(let i=0;i<this.rows.length;i++){
    //         let currentRowColumnCount = this.rows[i].columns.length

    //         if(maxColumnsCount<currentRowColumnCount){
    //             maxColumnsCount = currentRowColumnCount
    //         }
    //     }


    //     for(let i=0;i<this.rows.length;i++){
    //         let currentRow = this.rows[i]

    //         //fill the not existing columns with empty cells
    //     while(currentRow.columns.length<maxColumnsCount){

    //             currentRow.columns.push(GridColumn.getEmptyIndexedColumn(currentRow.columns.length))
    //     }
    //     }
    // }

    // if(this.hasHeader){
    //     if(this.headerTitles.length<maxColumnsCount){
    //             while(this.headerTitles.length<maxColumnsCount){
    //                 this.headerTitles.push("")
    //             }
    //     }
    // }
}

  @Input() rows : GridRow[]

 //@Input() dynamicCreate : boolean

  @Input() hasHeader : boolean

  

  @Input() headerTitles : HeaderGridColumn[]

  @Input() isEditable : boolean

  @Output()
  select: EventEmitter<any>

  getDDLByIndex(colIndex:number){
      var col=  this.headerTitles[colIndex]

      this.apiSerive.get(col.editModeDataUrl)
        .subscribe(
            apiResults => col.editModeValues = apiResults.map(function(result:any){
                let resultMapping = new KeyValue(result[col.editModePropValueName],result[col.editModePropLabelName]);
                return resultMapping; 
            }),
      );
  }

  startEditMode(rowIndex:number){
      let row = this.rows[rowIndex]

      let opositeValue = !row.isEditMode

      if(row.isEditMode){
          //TODO: save changes
      }

      row.isEditMode = opositeValue

        for(let i=0;i<row.columns.length;i++){
            row.columns[i].isEditMode = opositeValue
        }
     
        
      
  }

   constructor(public apiSerive: ApiService) {
    this.select = new EventEmitter()
    this.hasHeader = false
    this.isEditable = false
    //this.dynamicCreate = true
    }

  selectItem(value:any) {
    this.select.emit(value);
  }
}