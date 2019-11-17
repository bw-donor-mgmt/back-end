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

###