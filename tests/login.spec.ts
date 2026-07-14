import { test, expect } from '@playwright/test';


test('login success @positive', async ({ page }) => {
  // precondition
  await page.goto('https://www.emra.chat/login');

  // steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('adhi@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Tester!3');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // expected results
  await expect(page.getByText('Successfully logged in!')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Adhi adhi@gmail.com A' })).toBeVisible();
});


test('login unsuccessful @negative', async ({ page }) => {
  // precondition
  await page.goto('https://www.emra.chat/login');

  // steps
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Sign In' }).click();

  // expected results
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByText('Welcome Back')).toBeVisible();
});

