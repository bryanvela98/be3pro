# 🐾 AdoptMe

AdoptMe is an API to manage users, pets, and adoptions.

Key features:

- Swagger documentation for the `Users` module.
- Functional tests for the endpoints in `adoption.router.js`.
- Upload project image to DockerHub.

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- Docker
- Swagger for documentation
- Mocha + Chai for testing

---

## 🐳 Docker Image

The project image has been uploaded to DockerHub and can be used from the following link:

🔗 **[View Image on DockerHub](Had admin permission problems to generate the image)**

Download the image:

```bash
docker pull 'your_image'
```

---

## ▶️ How to Run the Project with NODE JS

### Steps:

1. Download or clone the repository.

2. Go to the root of the project.

3. Run the following command in the terminal to install all necessary dependencies.

```bash
npm install
```

4. Start the server

```bash
npm run start
```

## Important Note:

Before starting the project, create a `.env.prod` file in the root of the project with the following environment variables.

```env
MONGO_URI="your_database"
MODE="prod"
PORT=8080
JWT_SECRET_KEY="yoursecretkey"
```

### Running Tests

```bash
npm run test
```
