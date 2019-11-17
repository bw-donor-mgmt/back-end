# Backend For Bountiful

The backend is hosted using Heroku here. This is the base url.

### Endpoints 

#### Users
|  Purpose  |  Method  |  Enpoint  |  Requirements  | Response
| --------- | -------- | --------- | -------------- |
| Register User | POST | /register | username, password, role, |
| Log in | POST | /login | username, password
| Update | POST | /updateAccount | 
| Delete | Delete | /deleteAccount | the user id
| User info | GET | /account | 



If the user is a board member, they can enter their organization name when signing up or they can update their account later . 
The api will send a response back after registering or loggin (with correct credentials) with the token for the user. This token needs to be saved in local storage or their user will not be able to access any other endpoint. 

### Users

A user object will have an id, username (string), password (string), role (string). All of these are required.

#### Registering A User

endpoint: /register

Use an axios.post to send a user object. You do not need to write a key/value pair for id. An unique id will be given to each user upon signing up. 
Example: 
    {
        username: "Umeko1", 
        password: "1111", 
        role: "Board member"
    }

The api will return a token when the user has successfully registered, please saved this to headers

#### Loggin In 

endpoint: /login

Use axios.post to send username and password only. If the username and password is valid, the api will send a token back that needs to be set.

#### Updating User

Endpoint: /updateAccount

Use axios.put to update user information. You can just send the key/value pair that you want to update

Example: 
{username: 'Umeko2'} will only change the username and password will be unchanged


#### Deleting User

Endpoint : /deleteAccount

Use axios.delete to delete user account. The only thing that is needed is user id



### Donors

Add donor 

endpoint: /donors/add



#### Adding Donor