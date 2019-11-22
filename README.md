#  Backend For Bountiful

The backend is hosted using Heroku [here](https://bountiful2.herokuapp.com/). This is the base url.

  

### Base Url

   https://bountiful2.herokuapp.com/

  
  

###  Endpoints

####  Users

| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Register| POST | /register | username(string), password(string), organization(string)|
| Log in | POST | /auth/login | username(string), password(string)|
| Update | PUT | /user/id | see below |
| Delete | Delete |/user/id | user's id|
|User Info| GET | /user/id | user's id |

  
  

###  Users

A user can enter their organization name when signing up or they can update their account later .

The response you will get back after registering or loggin (with correct credentials) is the username, id, and the token for the user. This token needs to be saved in local storage as authorization header. If there is no token saved to header, the user will not be able to access any other endpoint.

A user object will have an id, username (string), password (string), role (string). All of these are required but you DO NOT need to specify id since the database will automatically give the new user an id. You only need to send username and password

####  Registering A User

##### Endpoint:  `"/register"`
Use an axios.post to send a user object. You do not need to write a key/value pair for id. An unique id will be given to each user upon signing up. An organization can already exist in the database.

###### Example:

	`{

	username: "John1",
#  Backend For Bountiful

The backend is hosted using Heroku [here](https://bountiful2.herokuapp.com/). This is the base url.

  

### Base Url

   https://bountiful2.herokuapp.com/

  
  

###  Endpoints

####  Users

| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Register| POST | /register | username(string), password(string), organization(string)|
| Log in | POST | /auth/login | username(string), password(string)|
| Update | PUT | /user/id | see below |
| Delete | Delete |/user/id | user's id|
|User Info| GET | /user/id | user's id |

  
  

###  Users

A user can enter their organization name when signing up or they can update their account later .

The response you will get back after registering or loggin (with correct credentials) is the username, id, and the token for the user. This token needs to be saved in local storage as authorization header. If there is no token saved to header, the user will not be able to access any other endpoint.

A user object will have an id, username (string), password (string), role (string). All of these are required but you DO NOT need to specify id since the database will automatically give the new user an id. You only need to send username and password

####  Registering A User

##### Endpoint:  `"/register"`
Use an axios.post to send a user object. You do not need to write a key/value pair for id. An unique id will be given to each user upon signing up. An organization can already exist in the database.

###### Example:

	`{

	username: "John1",

	password: "1111",

	organization: "Peace for All"

	}`

The api will return a token when the user has successfully registered. Please save the token to a header named "authorization".

  

####  Loggin In

##### Endpoint:  `"auth/login"`

Use axios.post to send username and password only. If the username and password is valid, the api will send a token back that needs to be set. Please save the token to a header named "authorization".
###### Example 

    Request:
	    {
		    username: "user19", 
		    password: "1919"
	    }
    Response:
    {
     "message": "Welcome user19!",
      "id": 22,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxOSIsImlhdCI6MTU3NDExNzg4NywiZXhwIjoxNTc0MjA0Mjg3fQ.BGfFNHi3kaXIwWVzERi81f6YmhUGU49fXsirF79Kh_I"
    }
    
####  Updating User

##### Endpoint:  `"user/id"`

Use axios.put to update user information. You can just send the key/value pair that you want to update

###### Example:

	{username: 'Umeko2'} 
	//sending the above will only change the username 
	//and password will be unchanged
	OR
	{password: 'newPassword'} 
	//the above will only change the password
	
  

####  Deleting User
##### Endpoint : `"/user/id"`
Use axios.delete to delete user account. The only thing that is needed is user id. This cannot be undone
  ______________________________________
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
Name is required but any other field can be added or updated later
##### Endpoint:   `"/donors/"`

###### Example

    {
    
    name : "John Smith", 
    
    phone : "601-555-555",
    
    email: "john.smith@email.com",
    
    contacted_on : "10/13/18",
    
    method : "email"
    
    }


#### Deleting Donor
##### endpoint: `"/donors/donor_id"`

Sending an delete request to this endpoint will delete donor with id


####  Updating Donor
You can update a donor by making a put request to:
The response will be the donor with the specified id
##### Endpoint:	

     "/donors/donors_id"
###### Example

    {
    username : newUsername
    }

Only the fields you send will be updated 

__________

The donations are what links the donors and campaigns they donated to together. You will need the id of the donor who made the donation and the id of the campaign they donated to. 

Example: 

    {
    amount: 80, //integer or floating point
    date : "09/19/18", //string 
    campaign_id: 3, //integer 
    donor_id : 1 //integer
    }

###  Donations
| Purpose | Method | Enpoint | Requirements | Response
--------- | -------- | --------- | --------------------|------ 
| Add Donation | POST | /donations| amount(Integer, Floating-point)| id of donation created
| Get Donation by Id | GET | /donations/id | donation's id | an object containing info about donation
| Update Donation | PUT | /donations/id | donation's id, campaign's id, donor's id | id of donation updated
| Delete Donation | DELETE |/donations/id | donation's id | id of donation deleted
| Get Donations for a Donor | GET |/donors/id/donations | donor's id | an array of all the donors donations

Example: 

    {amount: 80, //integer or floating point
    date : "09/19/18",  //string
    campaign_id: 3, //integer
    donor_id : 1 //integer
    }


------
###  Campaigns

Campaigns are linked to their organization by organization id. Please make sure to provide that information when creating a campaign.

| Purpose | Method | Enpoint | Requirements |Response
--------- | -------- | --------- | --------------------|------
| Create Campaign | POST | /campaigns | name(string), organization's id| id of campaign created
| Get Campaign by Id | GET | /campaigns/id | campaign's id | object of info about campaign
| Update Campaign | PUT | /campaigns/id | campaign's id | id of campaign updated 
| Delete Campaign | DELETE | /campaigns/id | campaign's id | id of campaign deleted
|Donor Info| GET | /campaigns/id | campaign's id | an object containing donor info
|Get Campaign Donors | GET | /campaigns/id/donors | campaign's id | an array of all donors who donated to that campaign

Example 

     {
	    name: "Youtube Ad", //string
	    description : "Raise money for new youtube ad ", //string
	    goal : 10000, //integer or floating point
	    raised: 456.85, //integer or floating point
	    organization_id : 1 //integer
    }

------
###  Organizations
| Purpose | Method | Enpoint | Requirements | Response
--------- | -------- | --------- | --------------------|-----
| Create Organization | POST | /organizations | name(string), mission(optional)| id of the organization created
| Get Organization by Id | GET | /organizations/id | Organization's id | an object containing info about organization
|Find Organization by name| GET |/organizations/name| Organizations's name| an object containing infor about organization
| Update Organization | PUT | /organizations/id | organizations's id |the id of organization updated
| Delete Organization | DELETE | /organizations/id | organization's id | id of organization deleted


Example: 

    {
    name : "Fresh Fruit",//string
    mission : "To educate others about the importance of eating fresh fruits and vegetables" //string
     }

 ** You can use underscores for spaces when finding and organization by name. Should work with space as well
	password: "1111",

	organization: "Peace for All"

	}`

The api will return a token when the user has successfully registered. Please save the token to a header named "authorization".

  

####  Loggin In

##### Endpoint:  `"auth/login"`

Use axios.post to send username and password only. If the username and password is valid, the api will send a token back that needs to be set. Please save the token to a header named "authorization".
###### Example 

    Request:
	    {
		    username: "user19", 
		    password: "1919"
	    }
    Response:
    {
     "message": "Welcome user19!",
      "id": 22,
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxOSIsImlhdCI6MTU3NDExNzg4NywiZXhwIjoxNTc0MjA0Mjg3fQ.BGfFNHi3kaXIwWVzERi81f6YmhUGU49fXsirF79Kh_I"
    }
    
####  Updating User

##### Endpoint:  `"user/id"`

Use axios.put to update user information. You can just send the key/value pair that you want to update

###### Example:

	{username: 'Umeko2'} 
	//sending the above will only change the username 
	//and password will be unchanged
	OR
	{password: 'newPassword'} 
	//the above will only change the password
	
  

####  Deleting User
##### Endpoint : `"/user/id"`
Use axios.delete to delete user account. The only thing that is needed is user id. This cannot be undone
  ______________________________________
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
Name is required but any other field can be added or updated later
##### Endpoint:   `"/donors/"`

###### Example

    {
    
    "name" : "John Smith", 
    
    "phone" : "601-555-555",
    
    "email" : "john.smith@email.com",
    
    "contacted_on" : "10/13/18",
    
    "method" : "email"
    
    }


#### Deleting Donor
##### endpoint: `"/donors/donor_id"`

Sending an delete request to this endpoint will delete donor with id


####  Updating Donor
You can update a donor by making a put request to:
The response will be the donor with the specified id
##### Endpoint:	

     "/donors/donors_id"
###### Example

    {
    username : newUsername
    }

Only the fields you send will be updated 

__________
###  Donations
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Add Donation | POST | /donations| amount(Integer, Floating-point)|
| Get Donation by Id | GET | /donations/id | donation's id |
| Update Donation | PUT | /donations/id | donation's id |
| Delete Donation | DELETE |/donations/id | donation's id |
| Donation's Info| GET | /donations/id | donation's id |
| Get Donations for a Donor | GET |/donors/id/donations | donor's id |

###  Campaigns
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Create Campaign | POST | /campaigns | name(string)|
| Get Campaign by Id | GET | /campaigns/id | campaign's id |
| Update Campaign | PUT | /campaigns/id | campaign's id |
| Delete Campaign | DELETE | /campaigns/id | campaign's id |
|Donor Info| GET | /campaigns/id | campaign's id |
|Get Campaign Donors | GET | /campaigns/id/donors | campaign's id |

###  Organizations
| Purpose | Method | Enpoint | Requirements |
--------- | -------- | --------- | -------------- 
| Create Organization | POST | /organizations | name(string), mission(optional)|
| Get Organization by Id | GET | /organizations/id | Organization's id |
|Find Organization by name| GET |/organizations/name| Organizations's name|
| Update Organization | PUT | /organizations/id | organizations's id |
| Delete Organization | DELETE | /organizations/id | organization's id |
| Organization Info| GET | /organizations/id | campaign's id |


 ** You can use underscores for spaces when finding and organization by name. Should work with space as well
