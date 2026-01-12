import { test, expect } from '@playwright/test';
import DashboardPage from '../../pages/dashboard.page.js';

test.describe('Dashboard - header basics', () => {
  let dashboardPage;

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);
    await dashboardPage.open();
  });

  test('shows app title', async () => {
    await expect(dashboardPage.header.appTitle).toContainText(/appointment planner/i);
  });

  test('shows Logout button', async () => {
    await expect(dashboardPage.header.logoutButton).toBeVisible();
  });
});
