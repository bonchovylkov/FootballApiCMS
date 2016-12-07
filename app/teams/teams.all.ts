import {Component, OnInit} from '@angular/core'
import  {ApiService} from '../api/index'
import {KeyValueDropdown,DynamicGrid} from '../shared/ui/index'
import {KeyValue,GridRow,GridColumn,HeaderGridColumn} from '../shared/models/index'
import {StringUtils} from '../shared/utils/index'

const teamsByCountry ='http://football-api.devks.msk.bg/countries/{0}/teams'
const allCountries ='http://football-api.devks.msk.bg/countries'
const defaultIndex = -1
const booleanDDL = KeyValueDropdown.getBoleanDropDown()
@Component({
    selector:'all-teams',
    templateUrl:'./app/teams/all-teams.html',
    styleUrls:['./app/teams/all-teams.css'],
    providers:[ApiService]
})
export class AllTeamsComponent implements OnInit{
    
   
    errorMessage: string
    teams: GridRow[] = []
    tableHeaders:HeaderGridColumn[]= 
        [ 
            new HeaderGridColumn(false,"",null,null,null,'id',defaultIndex,false) ,
            new HeaderGridColumn(false,"",null,null,null,'name',defaultIndex,false) ,
            new HeaderGridColumn(true,"", booleanDDL,null,null,'national',defaultIndex,false) ,
             new HeaderGridColumn(true,allCountries,null,null,null, 'country',defaultIndex,false) ,
             new HeaderGridColumn(false,"",null,null,null,'president',defaultIndex,false) ,
            new HeaderGridColumn(false,"",null,null,null,'founded',defaultIndex,false) ,
             new HeaderGridColumn(false,"",null,null,null,'venue',defaultIndex,false) ,
              new HeaderGridColumn(false,"",null,null,null,'coach',defaultIndex,false) ,
               new HeaderGridColumn(false,"",null,null,null,  'social',defaultIndex,false) ,
                new HeaderGridColumn(false,"",null,null,null,'url_home_kit',defaultIndex,false) ,
                 new HeaderGridColumn(false,"",null,null,null,'url_away_kit',defaultIndex,false) ,
                  new HeaderGridColumn(false,"",null,null,null,'form',defaultIndex,false) 
        
         ]

    countries: any[] = []
    



    ngOnInit(){
       
        this.getCountries();
        
    }

    /*
        @param {ApiService} apiSerive
    */
    constructor(public apiSerive: ApiService) {}

    getTeams(idCountry:number ){

        //IMPORTANT FOR THIS IN SUBSCRIBE FUNTION
        let self = this

        console.log(idCountry)
        console.log("getTeams called" )
        

        this.apiSerive.get( StringUtils.stringFormat( teamsByCountry,[idCountry]))
        .subscribe(
            apiTeams => this.teams = apiTeams.map(function(team:any, rowIndex:number){

               
                let currentCols = <any>[]
                let colIndex = 0
               
                for(var index in self.tableHeaders){
                    
                    let prop = self.tableHeaders[index]
                    prop.index = colIndex; //+1 because of the # row
                    let val=''

                    if(team[prop.value] !== undefined){ 
                        if(typeof team[prop.value] === 'object')
                        {
                            val = team[prop.value]["name"]
                        }
                        else{
                            val = team[prop.value]
                        }
                        
                          currentCols.push(new GridColumn(val,colIndex,false))
                    }
                    else{
                       
                          currentCols.push(GridColumn.getEmptyIndexedColumn(colIndex))
                    }

                  

                    console.log(prop + " " +    team[prop.value])

                    colIndex++
                }



               let row=  new GridRow(currentCols,rowIndex,1,true)
               return row

               
            }),
            error => this.errorMessage = <any>error
      );
        
    }

    getCountries(){
          console.log("getCountries called" )
        this.apiSerive.get(allCountries)
        .subscribe(
            apiCountries => this.countries = apiCountries.map(function(country:any){
                let countryMapping = new KeyValue(country.id,country.name);
                return countryMapping; 
            }),
            error => this.errorMessage = <any>error
      );
        
    }

    changeCountries(id:any){
             this.getTeams(id);
    }


}



