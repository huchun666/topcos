import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { CategoryListPage } from '../pages/category/list/list';
import { ShoppingCartPage } from '../pages/shoppingcart/list/list';
import { MemberIndexPage } from '../pages/member/index/index';
import { LoginPage } from '../pages/member/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*
* 组件集合
* @variable Array
* @component list 
*/
let componentList = [
  MyApp,
  TabsPage,
  HomePage,
  CategoryListPage,
  ShoppingCartPage,
  MemberIndexPage,
  LoginPage
]

@NgModule({
  declarations: componentList,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: componentList,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
