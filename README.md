# Backend For Bountiful

The backend is hosted using Heroku here. This is the base url.

Base Url


### Endpoints 



#### Users
|  Purpose  |  Method  |  Enpoint  |  Requirements  |
| --------- | -------- | --------- | -------------- |
| Register| POST | /register | username(string), password(string)|
| Log in | POST | auth/login | username(string), password(string)|
| Update | PUT | user/id | see below |
| Delete | Delete |user/id |  |
|User Info| GET | /user/id | |






### Users
If the user is a board member, they can enter their organization name when signing up or they can update their account later . 
The api will send a response back after registering or loggin (with correct credentials) with the token for the user. This token needs to be saved in local storage as authorization header. If there is no token saved to header, the user will not be able to access any other endpoint. 

A user object will have an id, username (string), password (string), role (string). All of these are required but you DO NOT need to specify id since the database will automatically give the new user an id. You only need to send username and password

#### Registering A User

endpoint: /register

Use an axios.post to send a user object. You do not need to write a key/value pair for id. An unique id will be given to each user upon signing up. 
Example: 
                {
                    username: "John1", 
                    password: "1111", 
                    organization: "Peace for All" //optional
                }

The api will return a token when the user has successfully registered. Please save the token to a header named "authorization".

#### Loggin In 

endpoint: /login

Use axios.post to send username and password only. If the username and password is valid, the api will send a token back that needs to be set. Please save the token to a header named "authorization".

#### Updating User

Endpoint: /user/id

Use axios.put to update user information. You can just send the key/value pair that you want to update

Example: 
                {username: 'Umeko2'} //this will only change the username and password will be unchanged


#### Deleting User

Endpoint : /user/id

Use axios.delete to delete user account. The only thing that is needed is user id



### Donors

#### Add A Donor
Example 

                {
                    "name" : "John Smith", 
                    "phone" : "601-555-555", 
                    "email" : "john.smith@email.com", 
                    "contacted_on" : "10/13/18", 
                    "method" : "email"
                    
                }

Name is required, every other field is optional

endpoint: /donors/



#### Adding Donor

endpoint:  /donors/donor_id

The response will be the donor with the specified id

#### Updating Donor

You can update a donor by making a put request to: 

endpoint/donors/donors_id

#### Get Donors Past Donation