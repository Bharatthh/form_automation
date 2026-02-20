module.exports = {
  default: {
    require: [
      'src/step-definitions/**/*.ts',
      'src/hooks/**/*.ts'
    ],
    requireModule: ['ts-node/register'],
    paths: ['features/**/*.feature'],
    format: ['progress',
      'json:reports/cucumber.json',
      'html:reports/html-report.html'
    ]
  }
};

