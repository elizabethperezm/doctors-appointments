export default class SideMenuComponent {

    constructor(page){
        this.page = page;
        this.doctorsMenuItem = page.getByText('Doctors');
    }

   async navigatetoDoctors() {
    await this.doctorsMenuItem.click();
  }
  
}