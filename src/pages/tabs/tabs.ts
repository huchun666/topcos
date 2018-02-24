import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage({
  segment: 'index'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'LoginPage'
  categoryRoot = 'CategoryListPage'
  shoppingcartRoot = 'ShoppingcartPage'
  myRoot = 'MyPage'
  selectedIndex: number = 0
  constructor(public navCtrl: NavController) {
  }

}
