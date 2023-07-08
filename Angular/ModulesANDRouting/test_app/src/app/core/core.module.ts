import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';
import { ShareModule } from '../shared/share.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GlobalLoaderComponent,
    NavigationComponent,
  ],
  imports: [
    CommonModule,
    ShareModule,
    RouterModule
    
  ],
  exports:[
    NavigationComponent,
    GlobalLoaderComponent
  ]
})
export class CoreModule { }
