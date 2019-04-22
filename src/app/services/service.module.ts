import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService, SharedService, SettingsService } from './service.index';


@NgModule({
  declarations: [
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceModule { }
