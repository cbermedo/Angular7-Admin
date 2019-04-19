import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SharedService, SidebarService } from './service.index';

@NgModule({
  imports: [
    CommonModule,
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService]
})
export class ServiceModule { }
