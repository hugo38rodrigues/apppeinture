# AppPeinture

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/hugo38rodrigues/apppeinture/CI_CD)
![Node.js Version](https://img.shields.io/node/v/apppeinture)
![License](https://img.shields.io/badge/license-MIT-blue)

## Project Description

**AppPeinture** is a web application designed to facilitate the management and display of painting projects, featuring a user-friendly interface for adding and viewing different types of paintings. The application is built using modern web technologies, ensuring a responsive and interactive user experience.

### Key Features
- **Dynamic Painting Management**: Users can add, display, and manage their painting projects seamlessly.
- **Modular Components**: Built with reusable components, making it easy to maintain and extend functionality.

## Tech Stack

| Technology       | Description                                   |
|------------------|-----------------------------------------------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | A JavaScript library for building user interfaces. |
| ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) | A typed superset of JavaScript that compiles to plain JavaScript. |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | A fast build tool and development server. |
| ![CSS](https://img.shields.io/badge/CSS-1572B6?style=flat&logo=css3&logoColor=white) | Stylesheet language for styling web pages. |

## Installation Instructions

### Prerequisites
- Node.js (version 12 or higher)
- npm (Node package manager)

### Step-by-Step Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/hugo38rodrigues/apppeinture.git
   cd apppeinture
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

### Environment Setup
No specific environment variables are required for this project as per the current configuration.

## Usage

To run the project, follow the installation instructions above. Once the server is running, you can interact with the application through the following pages:

- **Home Page**: Displays a welcome message and navigation to other sections.
- **Maquette Page**: Allows users to manage their painting projects.
- **Peinture Page**: Displays the details of the selected painting projects.
- **Error Page**: Handles any routing errors gracefully.

## Project Structure

The project structure is organized as follows:

```
apppeinture/
├── .github/               # GitHub workflows for CI/CD
├── public/                # Public assets, including images and icons
├── src/                   # Source code for the application
│   ├── asset/             # Images and static assets
│   ├── component/         # Reusable components
│   ├── page/              # Page components for routing
│   ├── main.tsx           # Entry point for the application
│   └── main.css           # Main stylesheet
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
└── vite.config.ts         # Configuration for Vite
```

### Main Directories and Files
- **`.github/`**: Contains CI/CD workflow configuration.
- **`public/`**: Houses images and icons used in the application.
- **`src/`**: The core of the application where all components and pages are defined.
- **`index.html`**: The main HTML file that serves as the entry point for the web application.
- **`package.json`**: Contains project dependencies and scripts.
- **`vite.config.ts`**: Configuration file for Vite, defining build and development settings.

## Contributing

We welcome contributions to AppPeinture! If you would like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and create a pull request.

Thank you for your interest in contributing to AppPeinture!
