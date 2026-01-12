export default class HeaderComponent {

    constructor(page){
        this.page = page;
        this.appTitle = page.getByRole('heading', {name: 'APPOINTMENT PLANNER'});
        this.logoutButton = page.getByText('Logout');
    }

   async clickLogout() {
    await this.logoutButton.click();
  }
  
}