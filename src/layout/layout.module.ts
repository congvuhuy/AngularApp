import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainComponent } from './layout-contain/layout-contain.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        LayoutContainComponent,
        HeaderComponent,
        FooterComponent,
        SidebarComponent
    ],
    exports: [
        LayoutContainComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LayoutModule { }