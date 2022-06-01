import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "../app-routing.module";
import { SharedModule } from "../shared/shared.module";
import { NavLayoutComponent } from "./public/nav-layout/nav-layout.component";

@NgModule({
    declarations: [
        NavLayoutComponent
    ],
    imports: [
        SharedModule,
        RouterModule,
    ],
    exports: [
        SharedModule,
        RouterModule,
        NavLayoutComponent
    ]
})
export class LayoutModule {

}