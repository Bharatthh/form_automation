// src/support/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

Before(async function () {
  // `this` is CustomWorld
  this.browser = await chromium.launch({ headless: true }); // change to true in CI
  this.page = await this.browser.newPage();
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});


