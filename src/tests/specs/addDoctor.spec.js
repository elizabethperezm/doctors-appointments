import { test, expect } from '@playwright/test';
import DoctorsPage from '../../pages/doctors.page';
import { doctorElizabeth } from '../data/doctors.data.js';

test.describe('Add doctor', () => {
  let doctorsPage;

  test.beforeEach(async ({ page }) => {
    doctorsPage = new DoctorsPage(page); 
    await doctorsPage.open();            
  });

  test('solo verifica que abre Doctors', async ({ page }) => {
    await expect(page).toHaveURL(/doctors/);
  });

  test('Validate add doctor', async () => {
    await doctorsPage.doctorList.clickAddDoctor();
    await doctorsPage.addDoctor.fillForm(doctorElizabeth);
    await doctorsPage.addDoctor.submitForm();
    await expect(doctorsPage.doctorList.doctorByName(doctorElizabeth.name)).toBeVisible();
  });

  test('Validate add doctor. 2', async () => {
    await doctorsPage.doctorList.clickAddDoctor();
    await doctorsPage.addDoctor.fillForm(doctorElizabeth);
    await doctorsPage.addDoctor.submitForm();
    await expect(doctorsPage.doctorList.doctorByName(doctorElizabeth.name)).toBeVisible();
  });

});
 