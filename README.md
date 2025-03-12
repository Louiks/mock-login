# Mock Login

# Welcome to Mock Login - the ultimate login mock application!

# Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Build](#build)
- [Deployment](#deployment)
- [Credits](#credits)

# Project structure

```
mock-login/
├── src/
│ ├── app/
│ │ ├── components/
│ │ │ ├── authentication/
│ │ │ └── user-card/
│ │ ├── models/
│ │ ├── pages/
│ │ │ ├── home/
│ │ │ └── login/
│ │ ├── pipes/
│ │ └── services/
│ ├── assets/
│ │   └── users/
│ ├── environments/
│ └── styles/
└── README.md       <--- HERE YOU ARE!
```

# Features

- Provides a user-friendly interface.
- Allows the user to log in.
- Allows the user to log out.
- Includes a PDF file outlining the application goals.
- Displays user information upon log in.
- Responsive design, adapting to various screen sizes.

# Installation

1. Download and install Node.js from [Node.js official website](https://nodejs.org).
2. Open command line run `npm install -g npm`
3. Go to `/mock-login/`
4. Open a terminal in the `/mock-login/` directory.
5. Run `npm install`
6. Start the development server by running `npm run ng serve`
7. You should see server running with the following information:

```
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **


√ Compiled successfully.
```

# Usage

1. Open command line, go to `/mock-login/` location, run `npm run ng serve`.
2. Open browser, navigate to http://localhost:4200/.
3. Log in to application using any credentials that match validation rules, press login button.
4. After a successful login, you will be redirected to the home page.
5. Enjoy exploring the application!

# Build

To build the project, run `npm run ng build`. The build artifacts will be stored in the `dist/` directory.

# Deployment

Comprehensive deployment instructions can be
found [here](https://v17.angular.io/guide/deployment#basic-deployment-to-a-remote-server).

**In short:**

1. Start with the production build: `npm run ng build`
2. Copy everything within the output folder (`dist/mock-login/`) to a folder on the server.
3. Configure the server to redirect requests for missing files to index.html. For details on configuring redirects,
   click [here](https://v17.angular.io/guide/deployment#fallback).
   <br>OR
4. If it is a main domain skip step 3 and put content of `dist/mock-login/browser` folder and put it
   inside `public_html/`
   folder on server

# Technologies Used

- Angular 19.2.1
- TypeScript 5.7.3
- HTML5
- SCSS

# Credits

- Thanks to [AppVerk Sp. z o.o.](https://appverk.com/) for providing the task.<br>
- Special thanks to [tiiny site](https://tiiny.site/) for hosting the PDF file.<br>
- All implementation credits to Jakub Kokot 2025 (Louiks).