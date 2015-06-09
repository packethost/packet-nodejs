# Packet Nodejs [![Build Status](https://api.shippable.com/projects/556f654fedd7f2c052073017/badge?branchName=master)](https://app.shippable.com/projects/556f654fedd7f2c052073017/builds/latest)
Is a nodejs library which helps you consume our api routes.  
For more info about the routes, please go to our [Api's documentation](https://www.packet.net/api/api.html)

## Installation
`npm install packet-nodejs` or `git clone git@github.com:packethost/packet-nodejs.git`

## Use
```
Packet = require('packet-nodejs');
var api = new Packet('YOU API TOKEN HERE');
//You can change your Token later on
api.setApiToken('YOUR NEW TOKEN');
```

## Implemented Routes
* [Projects](#projects)
* [Devices](#devices)
* [Facilities](#facilities)
* [Operating Systems](#operating-systems)
* [Plans](#plans)
* [Memberships](#memberships)
* [Invitations](#invitations)
* [Transfers](#transfer)
* [Users](#user)
* [Events](#events)
* [Notifications](#notifications)
* [SSH Keys](#ssh-keys)
* [Emails](#emails)

## Methods
### NOTES
To make the documentation simpler and easier to read I'll put here comments on general variables that would otherwise make the documentation too long if put in every method:

* All the implemented methods take a *callback* function as the last parameter. This function accepts *2 parameters*, **error** which is where an error will be if there was a problem with the request and **body** where you will find the data if there is any.

### Projects
#### Parameters
`id` Project's ID.  
`project` Project object.  
`parameters` Parameters used for pagination and other filters, use *false* if you don't need anything.  
`user` User's ID or User's Email.  
`callback` Callback Function used to return the api's response.  
#### Get Projects
**Note:** You can set *id* as false to get all the projects.  
`api.getProjects(id, parameters, callback);`

#### Add Projects
`api.addProject(project, callback);`

#### Update Projects
`api.updateProject(id, project, callback);`

### Remove Project
`api.updateProject(id, callback);`

### Transfer Project's Ownership
`api.transferProject(id, user, callback);`

### Invite To Project
`api.inviteToProject(id, user, callback);`

### Devices
#### Parameters
`projectId` Project's ID.  
`id` Device's ID.  
`device` Device object.  
`parameters` Parameters used for pagination and other filters, use *false* if you don't need anything.  
`action` A valid action name. [More Info](https://www.packet.net/api/api.html#devices-actions)  
`callback` Callback Function used to return the api's response.  
#### Get Devices
**Note:** You can set *id* as false to get all the devices a project has.  
`api.getProjects(projectId, id, parameters, callback);`

#### Add Devices
`api.getDevices(projectId, device, callback);`

#### Update Devices
`api.updateDevice(id, device, callback);`

### Remove Devices
`api.removeDevice(id, callback);`

### Device Actions
`api.deviceAction(id, action, callback);`

### Facilities
#### Parameters
`callback` Callback Function used to return the api's response.  
#### Get Facilities
`api.getLocations(callback);`

### Operating Systems
#### Parameters
`callback` Callback Function used to return the api's response.  
#### Get Operating Systems
`api.getOperatingSystems(callback);`

### Plans
#### Parameters
`callback` Callback Function used to return the api's response.  
#### Get Plans
`api.getPlans(callback);`

### Memberships
#### Parameters
`id` Membership's ID.  
`membership` Membership object.  
`callback` Callback Function used to return the api's response.  
### Get a single membership
`api.getMembership(id, callback);`
### Update membership
`api.updateMembership(id, membership, callback);`
### Remove membership
`api.removeMembership(id, callback);`

### Invitations
#### Parameters
`id` Invitation's ID.  
`callback` Callback Function used to return the api's response.  
#### Get a single invitation
`api.getInvitation(id, callback);`
#### Accept an invitation
`api.acceptInvitation(id, callback);`
#### Remove invitation
`api.removeInvitation(id, callback);`

### Transfer
#### Parameters
`id` Membership's ID  
`callback` Callback Function used to return the api's response.  
#### Get Transfer Request
`api.getTransfer(id, callback);`
#### Accept a Transfer Request
`api.acceptTransfer(id, callback);`
#### Remove a Transfer Request
`api.removeTransfer(id, callback);`

### User
#### Parameters
`id` User's ID  
`user` User object  
`callback` Callback Function used to return the api's response.  
#### Get Users
**Note:** Leaving *id* as false will return all the users available to the logged user,
`àpi.getUsers(id, callback);`
#### Update current user
`api.updateCurrentUser(user, callback);`

### Events
#### Parameters
`id` Event's ID  
`parameters` Parameters used for pagination and other filters, use *false* if you don't need anything.  
`callback` Callback Function used to return the api's response.  
#### Get events
**Note:** Leaving *id* as false will return all the events for the current user.
`api.getEvents(id, parameters, callback);`

### Notifications
#### Parameters
`id` Notification's ID  
`parameters` Parameters used for pagination and other filters, use *false* if you don't need anything.  
`callback` Callback Function used to return the api's response.  
#### Get notifications
**Note:** Leaving *id* as false will return all the notifications for the current user.
`api.getNotifications(id, parameters, callback);`

### SSH Keys
#### Parameters
`id` Notification's ID.  
`sshkey` SSH Key object.  
`callback` Callback Function used to return the api's response.  
#### Get ssh keys
**Note:** Leaving *id* as false will return all the ssh keys for the current user.
`api.getSshkeys(id, parameters, callback);`
#### Add a ssh key
`api.addSshkey(sshkey, callback);`
#### Update a ssh key
`api.updateSshkey(id, sshkey, callback);`
#### Remove a ssh key
`api.removeSshkey(id, callback);`

### Email 
#### Parameters 
`id` Notification's ID.  
`email` Email object.  
`callback` Callback Function used to return the api's response.  
#### Get an email
`api.getEmail(id, callback);`
#### Add an email
`api.addEmail(email, callback);`
#### Update an email
`api.updateEmail(id, email, callback);`
#### Remove an email
`api.removeEmail(id, callback);`
