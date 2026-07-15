import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';


test('login success @positive', async ({ page }) => {
  // precondition
  const loginPage = new LoginPage(page);
  await page.goto('https://www.emra.chat/login');

  // steps
  await loginPage.loginAs('adhi@gmail.com', 'Tester!3');

  // expected results
  await expect(page.getByText('Successfully logged in!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Adhi adhi@gmail.com A' })).toBeVisible();
});


test('login unsuccessful @negative', async ({ page }) => {
  // precondition
  const loginPage = new LoginPage(page);
  await page.goto('https://www.emra.chat/login');

  // steps
  await loginPage.loginAs('test@gmail.com', 'test');

  // expected results
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByText('Welcome Back')).toBeVisible();
});

