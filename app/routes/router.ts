import { NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AllTeamsComponent }   from '../teams/index';

const routes: Routes = [
    {path:'',redirectTo:'/teamsByCountry',pathMatch:'full'},
    {path:'teamsByCountry',component:AllTeamsComponent}
] 

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutringModule {}