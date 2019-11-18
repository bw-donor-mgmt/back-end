#  Backend For Bountiful

The backend is hosted using Heroku [here](https://bountiful2.herokuapp.com/). This is the base url.

  

### Base Url

   https://bountiful2.herokuapp.com/

  
  

###  Endpoints

####  Users

| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Register| POST | auth/register | username(string), password(string)|
| Log in | POST | auth/login | username(string), password(string)|
| Update | PUT | user/id | user id |
| Delete | Delete |user/id | user id |
|User Info| GET | /user/id | user id |

  
  

###  Users

A user can enter their organization name when signing up or they can update their account later .

The response you will get back after registering or loggin (with correct credentials) is the username, id, and the token for the user. This token needs to be saved in local storage as authorization header. If there is no token saved to header, the user will not be able to access any other endpoint.

  

A user object will have an id, username (string), password (string), role (string). All of these are required but you DO NOT need to specify id since the database will automatically give the new user an id. You only need to send username and password

  Response Example
	``{
	"message": "welcome user user21!",
	"id": 28,				"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIyMSIsImlhdCI6MTU3NDA5MTAwOCwiZXhwIjoxNTc0MTc3NDA4fQ.957dRoi580QO3wM1LbK-dnEkyn7Agm8PLxHSbGKvXso"
	}``

####  Registering A User

  

endpoint: /register

  

Use an axios.post to send a user object. You do not need to write a key/value pair for id. An unique id will be given to each user upon signing up.

Example:

	``{

	username: "John1",

	password: "1111",

	organization: "Peace for All" //optional

	}`

The api will return a token when the user has successfully registered. Please save the token to a header named "authorization".

  

####  Loggin In

  

endpoint: /login

Use axios.post to send username and password only. If the username and password is valid, the api will send a token back that needs to be set. Please save the token to a header named "authorization".


####  Updating User

Endpoint: /user/id

  

Use axios.put to update user information. You can just send the key/value pair that you want to update
  

Example:

	{username: 'Umeko2'} //this will only change the username and password will be unchanged

  
  

####  Deleting User
Endpoint : /user/id
Use axios.delete to delete user account. The only thing that is needed is user id. This cannot be undone

  
  
  

###  Donors
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Add Donor | POST | /donors | name(string)|
| Get Donor by Id | GET | /donors/id | donor's id |
| Update Donor | PUT | donors/id | donor's id |
| Delete Donor | DELETE |donors/id | donor's id |
|Donor Info| GET | /donors/id | donor's id |
|Get Past Donations | GET | /donors/id/donations | donor's id
 

####  Add A Donor

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

  
  
  

####  Adding Donor

  

endpoint: /donors/donor_id

  

The response will be the donor with the specified id

  

####  Updating Donor

  

You can update a donor by making a put request to:

Endpoint:
/donors/donors_id

###  Donations
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Add Donation | POST | /donations| amount(Integer, Floating-point)|
| Get Donation by Id | GET | /donations/id | donation's id |
| Update Donation | PUT | donations/id | donation's id |
| Delete Donation | DELETE |donations/id | donation's id |
| Donation's Info| GET | /donations/id | donation's id |
| Get Donations for a Donor | GET |/donors/id/donations | donor's id |

###  Campaigns
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Create Campaign | POST | /campaigns | name(string)|
| Get Campaign by Id | GET | /campaigns/id | campaign's id |
| Update Campaign | PUT | campaigns/id | campaign's id |
| Delete Campaign | DELETE |campaigns/id | campaign's id |
|Donor Info| GET | /campaigns/id | campaign's id |
|Get Campaign Donors | GET | /campaigns/id/donors | campaign's id |

###  Organizations
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Create Organization | POST | /organizations | name(string), mission(optional)|
| Get Organization by Id | GET | /organizations/id | Organization's id |
|Find Organization by name| GET |/organizations/name| Organizations's name|
| Update Organization | PUT | organizations/id | organizations's id |
| Delete Organization | DELETE |organizations/id | organization's id |
| Organization Info| GET | /organizations/id | campaign's id |


 ** You can use underscores for spaces when finding and organization by name. Should work with space as well