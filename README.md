# 🚀 Playwright + Cucumber BDD Automation Framework

---

## 📌 Overview

This repository contains a scalable and maintainable **End-to-End Test Automation Framework** developed using:

- 🎭 **Playwright** – UI Automation Engine  
- 🥒 **Cucumber** – Behavior Driven Development (BDD)  
- 🧱 **Page Object Model (POM)** – Design Pattern  
- 🌍 **Dotenv** – Environment Configuration  
- 🧪 **Node.js** – JavaScript Runtime  

The framework automates the DemoQA Practice Form application:

🔗 https://demoqa.com/automation-practice-form  

This project demonstrates real-world automation architecture aligned with industry best practices and scalable test design principles.

---

## 🏗 Framework Architecture

The framework is designed using the **Page Object Model (POM)** pattern to ensure:

- ✔ Separation of concerns  
- ✔ Reusability of code  
- ✔ Easy maintenance  
- ✔ Improved readability  
- ✔ Scalable test structure  


---

## 📂 Project Structure Explanation

### 📁 `features/`

Contains BDD test scenarios written in **Gherkin syntax**.

- Defines business-level behavior  
- Written in plain English  
- Improves collaboration between QA & stakeholders  
- Focuses on "what" the system should do  

---

### 📁 `step_definitions/`

Maps feature steps to automation logic.

- Connects Gherkin steps to Playwright code  
- Calls reusable methods from Page Objects  
- Maintains clean and readable test flow  
- Handles assertions and validations  

---

### 📁 `pages/`

Implements the **Page Object Model (POM)** design pattern.

- Stores locators  
- Contains reusable page actions  
- Encapsulates UI interaction logic  
- Reduces code duplication  
- Improves maintainability  

---

### 📁 `support/`

Contains Hooks configuration and test lifecycle management.

- Browser setup (Before hook)  
- Browser teardown (After hook)  
- Timeout configuration  
- Shared test context handling  

---

### 🌍 `.env`

Stores environment-specific configuration such as:

- `BASE_URL`  
- Credentials  
- Configurable test inputs  

This improves flexibility, security, and environment management.

---

## 🎯 Key Highlights

- Modular Framework Design  
- Clean Code Structure  
- Async/Await Implementation  
- Reusable Page Methods  
- Structured Test Lifecycle  
- Industry-Standard Automation Architecture  

---




