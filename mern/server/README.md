# Blacksburg Uniform Select MongoDB Server

## Endpoints

### User API

#### Login ("/user/login")
Login an existing user to the application. Expects the following format in the body of the request:
```
{
  "email" : "<email>",
  "password" : "<password>"
}
```

On successful login, a JWT is returned in the following format:
```
{
  "success": true,
  "token": "Bearer <jwt here>"
}
```

#### Register ("/user/register")
Register a new user for the application. Requires a valid JWT token in the Authorization Header:
```
Authorization: Bearer <jwt here>
```
Expects the following format in the body of the request:
```
{
  "email" : "<email>",
  "password" : "<password>",
  "f_name" : "<first name>",
  "l_name" : "<last name>"
}
```

The ObjectId of the user is returned on successful register:
```
{
  "acknowledged": true,
  "insertedId": "61903e3b2ad84df558d43916"
}
```

### Uniform API

#### Get All Uniforms ("/uniform")
Retrieves a list of all uniforms. Requires JWT token in Authorization Header. Uniforms are given as a list in the body of the response in the following format:
```
[
  {
    "_id": "618d27a29ab9ccdf310ba85c",
    "uniform_id": "Jacket 1",
    "student_id": "618d2fa2242947077cf39980",
    "piece": "Jacket",
    "type": "Marching",
    "height": "",
    "chest": "34",
    "waist": "",
    "head": "",
    "jacket_length": "long"
  },
  {
    "_id": "618d27c69ab9ccdf310ba85e",
    "uniform_id": "Jacket 3",
    "student_id": "618d2fa2242947077cf39980",
    "piece": "Jacket",
    "type": "Marching",
    "height": "",
    "chest": "26",
    "waist": "",
    "head": "",
    "jacket_length": "short"
  },
  {
    "_id": "618d28129ab9ccdf310ba85f",
    "uniform_id": "Pants 1",
    "student_id": "",
    "piece": "Pants",
    "type": "Concert",
    "height": "",
    "chest": "",
    "waist": "30",
    "head": "",
    "jacket_length": ""
  }
]
```
#### Add a Single Uniform ("/uniform/add")
Add a single uniform to the database. Requires JWT in Authorization Header. Expects the uniform information in the body of the request in the following format:
```
{
  "uniform_id": "Pants 1",
  "student_id": "",
  "piece": "Pants",
  "type": "Concert",
  "height": "",
  "chest": "",
  "waist": "30",
  "head": "",
  "jacket_length": ""
}
```
The ObjectId of the uniform is returned on a successful add:
```
{
  "acknowledged": true,
  "insertedId": "6190fcf58a1b49b4258e6daa"
}
```
#### Assign One or More Uniforms to a Single Student ("/uniform/assign")
Assign a list of uniforms to a student. Requires JWT in Authorization Header. Expects uniform ObjectId's as a list and student ObjectId in the following format:
```
{
  "uniform_ids": ["618d28129ab9ccdf310ba85f", 618d27a29ab9ccdf310ba85c],
  "student_id": "618d2fa2242947077cf39980"
}
```
On successful assignment, the following is returned:
```
{
  "acknowledged": true,
  "modifiedCount": 2,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 2
}
```
#### Unassign One or More Uniforms ("/uniform/unassign")
Unassigns (assign a blank student_id field) one or more uniforms. Requires JWT in Authorization Header. Expects uniform ObjectId's as a list in the following format:
```
{
  "uniform_ids": ["618d27a29ab9ccdf310ba85c", "618d27bf9ab9ccdf310ba85d"]
}
```
On successful unassignment, the following is returned:
```
{
  "acknowledged": true,
  "modifiedCount": 2,
  "upsertedId": null,
  "upsertedCount": 0,
  "matchedCount": 2
}
```