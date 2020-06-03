function generateMarkdown(data) {
  return `# ${data.title}
${data.projectDesc}

## Table of Content
${data.tableOfContent}

## Installation
${data.installation}

## Usage
${data.usage}

## License
[![GitHub license](https://img.shields.io/github/license/${data.username}/${data.repo})](https://github.com/${data.username}/${data.repo}/blob/master/LICENSE)

## Contributing
[![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.repo})](https://GitHub.com/${data.username}/${data.repo}/graphs/contributors/)

## Test
${data.tests}

## Questions
${data.questions}

## How It Works
https://github.com/${data.username}/${data.repo}/blob/master/Develop/howitworks.gif

`;
}

module.exports = generateMarkdown;
