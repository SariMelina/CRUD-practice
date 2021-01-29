# **CRUD (Create, Read, Update, Delete)**
---
## **FIRST OF ALL**
### Previous requirements:
- Installed [Docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/)
- Installed [NodeJS](https://nodejs.org/es/download/)
---
### **TO START**
- Create a .env file based on .env.example file.
---
### **TO RUN THIS PROJECT YOU NEED TO TYPE THE FOLLOWING COMMANDS**
- Install the all dependencies, type: ```npm i```
- Create a MySQL container: 

    ``sudo docker run --name mysql-sara -e MYSQL_ROOT_PASSWORD=12345 -p 3306:3306 -d mysql:5.6``
- Enter the MySQL terminal: 

    ``sudo docker exec -it mysql-sara mysql -p``
- Create the _students_ table: [CREATE STUDENTS TABLE](#CREATE-STUDENTS-TABLE)
- In the ´DB_HOST = db´ of your .env file change it to **´DB_HOST = localhost´**

#### RUNNING THE TEST
For run the POST test, use the following command: ``npm test``
#### RUNNING THE PROJECT
For run all the project, use the following command: ``npm start``

---
### **USING DOCKER-COMPOSE**
For excellent execution the CRUD with a container, run the following command in the same directory of the project:

``
sudo docker-compose up
``

Take care that your .env file has the **´DB_HOST = db´** and already created the student table [CREATE STUDENTS TABLE](#CREATE-STUDENTS-TABLE)

---
### **CREATE STUDENTS TABLE**
Copy the next statement and then paste it into your MySQL terminal.
```sql
CREATE TABLE students ( 
    id INT PRIMARY KEY not null AUTO_INCREMENT, 
    name VARCHAR(50), 
    gender CHAR(1), 
    phone VARCHAR(10), 
    address VARCHAR(60), 
    age INT(3) 
);
```
---
---
## **PATH**

Remember to change the port.
### **GET**
```
http://localhost:3005/v1/students/
```
#### HTTP GET Response
```json
{
    "status": 200,
    "msg": "Success",
    "data": [
        {
            "id": 1,
            "name": "New User",
            "gender": "M",
            "phone": "0000000000",
            "address": "C. 78",
            "age": 30
        }
    ]
}
```
### **GET**
```
http://localhost:3005/v1/students/1
```
#### HTTP GET Response
```json
{
    "status": 200,
    "msg": "Success",
    "data": [
        {
            "id": 1,
            "name": "New User",
            "gender": "M",
            "phone": "0000000000",
            "address": "C. 78",
            "age": 30
        }
    ]
}
```
### **POST**
```
http://localhost:3005/v1/students/
```
#### BODY
```json
{
    "name": "Sara Reyes",
    "gender": "F",
    "phone": "1234567890",
    "address": "C. 50",
    "age": 21
}
```
#### HTTP POST Response
```json
{
    "status": 201,
    "msg": "New student added"
}
```
### **UPDATE**
```
http://localhost:3005/v1/students/1
```
#### BODY
```json
{
    "name": "New Sara",
    "gender": "F",
    "phone": "1234567890",
    "address": "Calle Ayuda",
    "age": 21
}
```
#### HTTP UPDATE Response
```json
{
    "status": 201,
    "msg": "Success update"
}
```
### **DELETE**
```
http://localhost:3005/v1/students/1
```
#### HTTP DELETE Response
```json
{
    "status": 200,
    "msg": "Student deleted "
}
```