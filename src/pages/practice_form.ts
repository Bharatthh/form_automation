import { Page, Locator } from '@playwright/test';

export class PracticeFormPage {

  private page: Page;

  private firstname: Locator;
  private lastname: Locator;
  private email: Locator;
  private gendermale: Locator;
  private mobilenumber: Locator;
  private dobInput: Locator;
  private monthSelect: Locator;
  private yearSelect: Locator;
  private subject: Locator;
  private sportsCheckbox: Locator;
  private readingCheckbox: Locator;
  private address: Locator;
  private state: Locator;
  private haryana: Locator;
  private city: Locator;
  private panipat: Locator;
  private submit: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstname = page.locator('#firstName');
    this.lastname = page.locator('#lastName');
    this.email = page.locator('#userEmail');
    this.gendermale = page.getByText('Male', { exact: true });

    this.mobilenumber = page.locator('#userNumber');
    this.dobInput = page.locator('#dateOfBirthInput');
    this.monthSelect = page.locator('.react-datepicker__month-select');
    this.yearSelect = page.locator('.react-datepicker__year-select');
    this.subject = page.locator('#subjectsInput');
    this.sportsCheckbox = page.getByText('Sports', { exact: true });
    this.readingCheckbox = page.getByText('Reading', { exact: true });
    this.address = page.locator('#currentAddress');
    this.state = page.locator('#stateCity-wrapper');
    this.haryana = page.getByText('Haryana', { exact: true });
    this.city = page.locator('#city');
    this.panipat = page.getByText('Panipat', { exact: true });
    this.submit = page.getByRole('button', { name: 'Submit' });
  }

  async navigate(): Promise<void> {
    await this.page.goto(process.env.BASE_URL!);
    await this.page.locator('.card-body', { hasText: 'Forms' }).click();
    await this.page.getByText('Practice Form', { exact: true }).click();
  }

  async fillForm(
    fname: string,
    lname: string,
    emailid: string,
    mob_number: string,
    subject: string,
    address: string,
    day: string,
    month: string,
    year: string
  ): Promise<void> {

    await this.firstname.fill(fname);
    await this.lastname.fill(lname);
    await this.email.fill(emailid);

    await this.gendermale.click();
    await this.mobilenumber.fill(mob_number);

    await this.dobInput.click();
    await this.monthSelect.selectOption(month);
    await this.yearSelect.selectOption(year);
    await this.page.click(`.react-datepicker__day--0${day}`);

    await this.subject.fill(subject);
    await this.subject.press('Enter');

    await this.sportsCheckbox.click();
    await this.readingCheckbox.click();

    await this.address.fill(address);

    await this.state.click();
    await this.haryana.click();
    await this.city.click();
    await this.panipat.click();
  }

  async submitForm(): Promise<void> {
    await this.submit.click();
    await this.page.screenshot({
      path: 'Pictures/screenshot1.png',
      fullPage: true
    });
  }

  async verifySubmission(): Promise<void> {
    await this.page.waitForSelector('.modal-content');
  }
}
