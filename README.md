\# Node Express REST API



A simple REST API built with Node.js and Express.js to perform CRUD operations on tasks.



\## Features



\- Get all tasks

\- Get a single task by ID

\- Create a new task

\- Update an existing task

\- Delete a task

\- JSON request and response handling

\- Input validation

\- Proper HTTP status codes

\- Postman collection included for API testing



\## Technologies Used



\- Node.js

\- Express.js

\- dotenv

\- Postman



\## Project Structure



```text

node-express-rest-api/

├── src/

│   ├── controllers/

│   │   └── taskController.js

│   ├── data/

│   │   └── tasks.js

│   ├── routes/

│   │   └── taskRoutes.js

│   └── app.js

├── .env.example

├── .gitignore

├── package.json

└── My Collection.postman\_collection.json

```



\## Installation



Clone the repository and open the project folder:



```bash

git clone https://github.com/Lalitsah-svg/node-express-rest-api.git

cd node-express-rest-api

```



Install dependencies:



```bash

npm install

```



\## Environment Setup



Create a `.env` file in the project root:



```env

PORT=3000

```



\## Run the API



For development:



```bash

npm run dev

```



For normal execution:



```bash

npm start

```



The API runs at:



```text

http://localhost:3000

```



\## API Endpoints



| Method | Endpoint | Description |

|---|---|---|

| GET | `/api/tasks` | Get all tasks |

| GET | `/api/tasks/:id` | Get a task by ID |

| POST | `/api/tasks` | Create a task |

| PUT | `/api/tasks/:id` | Update a task |

| DELETE | `/api/tasks/:id` | Delete a task |



\## Example POST Request



```json

{

&#x20; "title": "Learn Node.js",

&#x20; "description": "Study Node.js fundamentals"

}

```



\## Example PUT Request



```json

{

&#x20; "title": "Learn Express.js",

&#x20; "description": "Build REST APIs with Express",

&#x20; "completed": true

}

```



\## Testing with Postman



All five CRUD endpoints were tested using Postman.



The exported Postman collection is included in the project:



```text

My Collection.postman\_collection.json

```



Import this file into Postman to test the API requests.



\## HTTP Status Codes



\- `200` — Successful request

\- `201` — Resource created successfully

\- `400` — Invalid request

\- `404` — Resource or route not found



\## Author



Lalit Kumar

