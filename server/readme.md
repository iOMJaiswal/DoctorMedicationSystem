# Doctor Medication System

This is a backend server application built with Node.js, Express.js, and PostgreSQL for managing doctors, patients, and medications in a healthcare system.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Database Setup](#database-setup)
- [API Endpoints](#api-endpoints)
  - [Doctor Routes](#doctor-routes)
  - [Patient Routes](#patient-routes)
  - [Medication Routes](#medication-routes)
  - [Authentication](#authentication)
- [Usage](#usage)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/iOMJaiswal/DoctorMedicationSystem
```

2. Navigate to the project directory:

```bash
cd DoctorMedicationSystem
```

3. Install the dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```
PORT=4000
JWT_SECRET=your-jwt-secret

# PostgreSQL connection details
PGUSER=postgres
PGPASSWORD=your-postgres-password
PGHOST=localhost
PGDATABASE=doctormedicationsystem
PGPORT=5432
```

Replace the placeholders with your desired values.

## Database Setup

This application uses PostgreSQL as the database. You need to have PostgreSQL installed and running on your machine.

1. Create a new database named `doctormedicationsystem`.

2. Open the `database.js` file and uncomment the code blocks related to creating the necessary tables.

3. Run the application using `npm start`. The tables will be created in the `doctormedicationsystem` database.

4. Once the tables are created, comment out or remove the code blocks you just uncommented to avoid recreating the tables on subsequent application runs.

## API Endpoints

### Doctor Routes

- `GET /api/doctors/get-doctor` - Get all doctors
- `GET /api/doctors/get-doctor/:id` - Get a doctor by ID
- `POST /api/doctors/create-doctor` - Create a new doctor
- `PUT /api/doctors/update-doctor/:id` - Update an existing doctor
- `POST /api/doctors/delete-doctor/:id` - Delete a doctor (uses POST method to simulate DELETE)

### Patient Routes

- `GET /api/patients/get-patients` - Get all patients
- `GET /api/patients/get-patient-by-doctor-id/:doctor_id` - Get patients by doctor ID
- `GET /api/patients/get-patient-by-patient-id/:patient_id` - Get a patient by patient ID
- `POST /api/patients/create-patient` - Create a new patient
- `PUT /api/patients/update-patient/:id` - Update an existing patient
- `POST /api/patients/delete-patient/:id` - Delete a patient (uses POST method to simulate DELETE)

### Medication Routes

- `GET /api/medications/get-medications` - Get all medications
- `GET /api/medications/get-medication-by-patient-id/:id` - Get medications by patient ID
- `GET /api/medications/get-medication-by-medication-id/:id` - Get a medication by medication ID
- `POST /api/medications/create-medication` - Create a new medication
- `PUT /api/medications/update-medication/:id` - Update an existing medication
- `POST /api/medications/delete-medication/:id` - Delete a medication (uses POST method to simulate DELETE)

### Authentication

- `POST /api/doctors/login` - Login for doctors (generates a JSON Web Token)

## Usage

1. Start the server:

```bash
npm start
```

2. The server will start running on `http://localhost:4000`.

3. Use a tool like Postman or cURL to send requests to the API endpoints.

Example request to create a new doctor:

```
POST http://localhost:4000/api/doctors/create-doctor
Content-Type: application/json

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  ...
}
```

Example request to login as a doctor:

```
POST http://localhost:4000/api/doctors/login
Content-Type: application/json

{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

The response will include a JSON Web Token (JWT) that should be included in the `Authorization` header for authenticated requests.

```
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzQ1NzQ0MCwiZXhwIjoxNjgzNDYxMDQwfQ.yvYtjGD3jNYVfzyrY9L_JHvZw9aplHyRNsqEneuFOlU",
  "doctor_id": 1
}
```

Example authenticated request to create a new patient:

```
POST http://localhost:4000/api/patients/create-patient
Content-Type: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4MzQ1NzQ0MCwiZXhwIjoxNjgzNDYxMDQwfQ.yvYtjGD3jNYVfzyrY9L_JHvZw9aplHyRNsqEneuFOlU

{
  "name": "Jane Smith",
  "date_of_birth": "1990-05-15",
  "gender": "F",
  "phone_number": "1234567890",
  "email": "jane@example.com",
  "doctor_id": 1
  ...
}
```

Make sure to replace the placeholders in the example requests with your actual data and the JWT obtained from the login response.

```

This updated README file includes an example request for doctor login and an example authenticated request for creating a new patient. It also provides instructions on how to include the JWT in subsequent authenticated requests.
```
