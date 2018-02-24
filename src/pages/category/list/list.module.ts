import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CategoryListPage } from './list'; 

@NgModule({
  declarations: [
    CategoryListPage,
  ],
  imports: [
    IonicPageModule.forChild(CategoryListPage),
  ],
})
export class CategoryPageModule {}
