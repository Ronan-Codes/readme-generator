// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "NONE") {
    return '';
  } else {
      return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//const renderLicenseLink = license => {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
  if (license === "NONE") {
    return '';
  } else {
    return `## License

Licensed under the [${license}](./license.txt) license.`
  };
};


// TODO: Create a function to generate markdown for README
const readmeTemplate = data => {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

* If you have any questions/suggestions/concernes, open an issue in the README-Generator repository of my GitHub profile [${data.username}](https://github.com/${data.username}).
* Or contact me directly at ${data.email}.
`;
}

module.exports = readmeTemplate
