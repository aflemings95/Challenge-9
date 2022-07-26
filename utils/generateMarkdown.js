// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return license
  } else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    return license
  } else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return license
  } else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.Title}
# Description
# Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Motive](#motive)
- [Reason](#reason)
- [Solution](#solution)
- [Lesson](#lesson)
- [Distinction](#distinction)
- [Usage](#usage)
- [License](#license)
- [LicenseLink](#licenselink)
- [Contributing](#contributing)
# Installation
What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
# Motive
What was your motivation?, ${data.Motive}
# Reason
Why did you build this project?, ${data.Reason}
# Solution
What problem does it solve?, ${data.Soluton}
# Lesson
What did you learn?, ${data.Lesson}
# Distinction
What makes your project stand out?, ${data.Distinction}
# Usage 
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license.
${renderLicenseBadge(data.License)}
# LicenseLink
${renderLicenseLink(data.Link)}
${renderLicenseSection(data.License)}
# Contribution
Contributors: ${data.Contribution} 
# Questions
If you have any questions about the repo contact ${data.User}
`;
}
module.exports = generateMarkdown;
