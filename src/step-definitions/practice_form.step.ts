import { Given, When, Then } from '@cucumber/cucumber';
import { PracticeFormPage } from '../pages/practice_form';

let practicePage: PracticeFormPage;

Given(
  'I open the practice form pages',
  { timeout: 10000 },
  async function () {
    practicePage = new PracticeFormPage(this.page);
    await practicePage.navigate();
  }
);

When('I enter all required details', async function () {
  await practicePage.fillForm(
    process.env.FIRSTNAME!,
    process.env.LASTNAME!,
    process.env.EMAIL!,
    process.env.MOBILE_NUMBER!,
    process.env.FILL_SUBJECT!,
    process.env.FILL_ADDRESS!,
    process.env.BIRTH_DATE!,
    process.env.BIRTH_MONTH!,
    process.env.BIRTH_YEAR!
  );
});

Then('I submit the form', async function () {
  await practicePage.submitForm();
});
