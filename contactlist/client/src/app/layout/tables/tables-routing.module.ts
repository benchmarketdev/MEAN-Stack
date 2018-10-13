import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchooldataComponent } from './tables.component';

const routes: Routes = [
    {
        path: '', component: SchooldataComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablesRoutingModule {
}
