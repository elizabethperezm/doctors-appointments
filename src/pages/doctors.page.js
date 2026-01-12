import BasePage from './base.page.js';
import DoctorListComponent from '../components/doctors/doctor-list.component.js';
import AddDoctorComponent from '../components/doctors/add-doctor.component.js';

export default class DoctorsPage extends BasePage {
  constructor(page) {
    super(page, process.env.DOCTORS_URL);
    this.doctorList = new DoctorListComponent(page);
    this.addDoctor = new AddDoctorComponent(page);
  }
}
