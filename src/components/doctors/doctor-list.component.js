export default class DoctorListComponent {

    constructor(page){
        this.page = page;
        this.addDoctorButton = page.getByRole('button', {name: 'Add New Doctor'});
    }

    async clickAddDoctor(){
        await this.addDoctorButton.click();
    }

    doctorByName(name) {
    return this.page.getByText(`Dr. ${name}`);
  }
  
}