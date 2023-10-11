// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // The if statement make sure that the no license scenario is handle
  if (license) {
    // I am using the switch statement to handle the user's selected cases
    switch (license) {
      case 'Apache':
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'

      case 'GPLv3':
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'

      case 'IPL':
        return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'

      case 'MIT':
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

      default:
        return "";
    }
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // The if statement make sure that the no license scenario is handle
  if (license) {
    // This is the link to the Badge 
    switch (license) {
      case 'Apache':
        return 'https://opensource.org/licenses/Apache-2.0'

      case 'GPLv3':
        return 'https://www.gnu.org/licenses/gpl-3.0'

      case 'IPL':
        return 'https://opensource.org/licenses/IPL-1.0'

      case 'MIT':
        return 'https://opensource.org/licenses/MIT'

      default:
        return "";
    }
  } else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
    ## License

    ${license}
    - [${license}](${renderLicenseLink(license)}).
    `;

  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installInstruction}

  ## Usage
  ${answers.usageInfo}

  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.testInstruction}

  ## Questions
  If you have any questions about this repository, contact ${answers.questions}.

  `;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};
