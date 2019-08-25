import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgWrapperRoutingModule } from "./ng-wrapper-routing.module";
import { DocwrapperComponent, SafePipe } from './docwrapper/docwrapper.component';

@NgModule({
  declarations: [DocwrapperComponent,SafePipe],
  imports: [CommonModule, NgWrapperRoutingModule],
  exports: [DocwrapperComponent]
})
export class NgWrapperModule {}
