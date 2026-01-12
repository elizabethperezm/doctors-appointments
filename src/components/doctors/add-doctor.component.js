export default class AddDoctorComponent {
    
    constructor(page){
        this.page = page;
        this.nameInput = page.getByRole('textbox', {name: 'Doctor Name'});
        this.doctorFemaleInput = page.getByRole('radio', {name: 'Female'});
        this.doctorMaleInput = page.getByRole('radio', {name: 'Male'});
        this.phoneInput = page.getByRole('textbox', {name: 'Mobile Number'});
        this.emailInput = page.getByRole('textbox', {name: 'Email'});
        this.departmentDropdown = page.getByTestId('Specialization').nth(1);
        this.educationInput = page.getByRole('textbox', {name: 'Education'});
        this.experienceDropdown = page.getByTestId('Experience');
        this.designationInput = page.getByRole('textbox', {name: 'Designation'});
        this.dutyTimingDropdown = page.getByTestId('DutyTiming');
        this.saveButton = page.getByRole('button', { name: 'Save'});
    }

    async selectGender(gender) {
         const genderSelector = gender === 'Female' ? this.doctorFemaleInput : this.doctorMaleInput;
         await genderSelector.click();
    }

    async selectDepartment(department) {
        await this.departmentDropdown.click();
        await this.page.getByRole('option', { name: department }).click();
    }

    async selectExperience(experience) {
        await this.experienceDropdown.click();
        await this.page.getByRole('option', {name: experience}).click();
    }

    async selectDutyTiming(dutyTiming) {
        await this.dutyTimingDropdown.click();
        await this.page.getByRole('option', {name: dutyTiming}).click();
    }

    async fillForm(name, gender, phone, email, department, education, experience, designation, dutyTiming) {
        await this.nameInput.fill(name);
        await this.selectGender(gender)
        await this.phoneInput.fill(phone);
        await this.emailInput.fill(email);
        await this.selectDepartment(department);
        await this.educationInput.fill(education);
        await this.selectExperience(experience);
        await this.designationInput.fill(designation)
        await this.selectDutyTiming(dutyTiming);
    }

    async fillForm(doctor) {
        await this.nameInput.fill(doctor.name);
        await this.selectGender(doctor.gender)
        await this.phoneInput.fill(doctor.phone);
        await this.emailInput.fill(doctor.email);
        await this.selectDepartment(doctor.department);
        await this.educationInput.fill(doctor.education);
        await this.selectExperience(doctor.experience);
        await this.designationInput.fill(doctor.designation)
        await this.selectDutyTiming(doctor.dutyTiming);
    }

    async submitForm(page){
        await this.saveButton.click();
    }
}