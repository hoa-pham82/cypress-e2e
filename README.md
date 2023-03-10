## 🧠 Cypress workspace

This workspace to run E2E test for API and UI - MARSAIR challenge

Implemented scenarios:

1. API: Verify the potential customer is able to search without promotional code and get available seats
2. API: Verify the potential customer is able to search without promotion code and get no available seats
3. UI: Verify the potential customer is able to search with the invalid promotional code and get available seats

### 🛠️ **Installation**

1. Clone the repository

`git clone -b marsair-challenge https://github.com/hoa-pham82/cypress-e2e.git`

2. Install Cypress and dependencies

`npm install`

### 🏃‍♂️ **Running the tests**

1. Run all test file in local

`npm run cy:run`

2. Run individual specific file in Chrome browser

`npm run cy:ui:chrome`

3. Report will be saved in `mochawesome-report` folder in local

### 👨‍🌾 **Project structure**

![image info](image.png)
