import { test, expect } from '@playwright/test';

test('login unsuccessful @negative', async ({ page }) => {
  await page.goto('https://www.emra.chat/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('test');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await expect(page.getByText('Welcome Back')).toBeVisible();
});

