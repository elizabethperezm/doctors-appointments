import BasePage from './base.page.js';
import HeaderComponent from '../components/common/header.component.js';
import SideMenuComponent from '../components/common/sidemenu.component.js';

export default class DashboardPage extends BasePage {
  constructor(page) {
    super(page, process.env.DASHBOARD_URL);
    this.header = new HeaderComponent(page);
    this.sideMenuComponent = new SideMenuComponent(page);
  }
}