
# Secure API with JWT, GraphQL, and PostgreSQL

This project is a secure API built with Node.js, Express.js, GraphQL, and PostgreSQL. It implements JWT-based authentication and a CRUD for managing users. The API is designed to serve as the backend for a React Native mobile application.

---

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [License](#license)

---

## Features
- User authentication using **JWT**.
- CRUD operations for user management.
- Secure database integration with **PostgreSQL**.
- Query and mutation management with **GraphQL**.
- **Jest** for unit and integration testing.

---

## Technologies
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **GraphQL**: API query language.
- **PostgreSQL**: Relational database.
- **Sequelize**: ORM for database management.
- **JWT**: Secure user authentication.
- **Jest**: Testing framework.
- **Nodemon**: Development server with live reload.

---

## Setup

### Prerequisites
1. Install **Node.js** (v16 or later).
   ```bash
   node -v
   ```
2. Install **PostgreSQL** and create a database.
3. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

### Install Dependencies
Run the following command to install all dependencies:
```bash
npm install
```

---

## Environment Variables
Create a `.env` file in the project root with the following content:
```env
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
JWT_SECRET=your_secret_key
```

> Replace `your_database_user`, `your_database_password`, and `your_database_name` with your actual database credentials.

---

## Usage

### Start the Server
Run the following command to start the development server:
```bash
npm run dev
```

The server will be available at: `http://localhost:4000`.

### Access GraphQL Playground
Once the server is running, you can access the **GraphQL Playground** at:
```
http://localhost:4000/graphql
```

---

## Running Tests
This project uses **Jest** for testing. To execute the test suite, run:
```bash
npm test
```

---

## Folder Structure
```
/src
  /config         # Database and environment configurations
  /controllers    # Business logic for user operations
  /models         # Sequelize models for database tables
  /middlewares    # Middleware for authentication and validation
  /resolvers      # GraphQL resolvers
  /schemas        # GraphQL schemas
  /tests          # Test files for unit and integration testing
  /utils          # Helper functions
.env              # Environment variables
package.json      # Project dependencies and scripts
server.js         # Entry point of the application
```

---

## Authors

- [@leoholiveira](https://github.com/leoholiveira)

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to reach out for further clarifications or contributions.
