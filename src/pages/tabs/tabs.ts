import { Component } from '@angular/core';

import { CategoryListPage } from '../category/list/list';
import { MemberIndexPage } from '../member/index/index';
import { ShoppingCartPage } from '../shoppingcart/list/list';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryListPage;
  tab3Root = ShoppingCartPage;
  tab4Root = MemberIndexPage;

  constructor() {

  }
}
