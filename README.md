# Playwright QA Automation Project

This repository contains a basic Playwright automation project using JavaScript.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Run tests

- Run all tests:
  ```bash
  npm test
  ```

- Run headed tests:
  ```bash
  npm run test:headed
  ```

- Open the Playwright code generator:
  ```bash
  npm run codegen
  ```

## Project structure

- `package.json` - project metadata and scripts
- `playwright.config.js` - Playwright configuration
- `tests/` - test files
- `pages/` - page object models
