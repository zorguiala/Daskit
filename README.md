# Daskit

A professional resume landing page built with React, designed to showcase skills, experience, and achievements as a Front-End Engineer. The project includes advanced features such as theme toggles, styled components, and a responsive design.

---

## Features

### **1. Navbar**

- **Two theme toggles**:
  - **Redux-based toggle**: Manages theme state with Redux and persists to `localStorage`.
  - **Context API-based toggle**: Manages theme state with Context API and persists to `localStorage`.

### **2. Hero Section**

- Displays name, photo, title (**Front-End Engineer**), and quick links to LinkedIn and GitHub.

### **3. About Me Section**

- Highlights key skills and expertise in technologies such as React.js, TypeScript, styled-components, Tailwind CSS, and testing frameworks like Jest and Cypress.

### **4. Skills and Tools Section**

- Displays a list of technical skills with proficiency levels for frontend technologies, testing tools, and more.

### **5. Cards Section**

- **Three identical cards** styled using:
  - **Material UI**
  - **Tailwind CSS**
  - **Styled-components**

### **6. Work Experience and Education Section**

- Detailed experience in companies like Toptal and AKEOPLUS, along with educational background.

### **7. Contact Section**

- A contact form to send emails to **zorguialadinne@outlook.com** using a server-side email API (e.g., Nodemailer).

### **8. Theming**

- Dark/Light mode across all components, with theme preference stored in `localStorage` to persist after page reload.

---

## Technologies Used

- **Frontend Framework**: React.js
- **Styling Libraries**:
  - Material UI
  - Tailwind CSS
  - Styled-components
- **State Management**: Redux Toolkit, Context API
- **Email Service**: Nodemailer (or equivalent)
- **Testing Frameworks**: Jest, Cypress

---

## Installation

`npm install`

**To start**:
`npm run dev`
