<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Live Example

<a href="https://helo.devmountain.com/">helo.devmountain.com</a>

# Project Summary

This project is designed to replicate what you might receive on the job. There won't be any guided instruction on what you'll need to do. We will only provide you with design specifications and technical requirements. Your mentors have also been asked to provide only minimal guidance. They can point you in the right direction, but cannot help you code. This project is a chance for you to combine and showcase the skills you've learned so far.

With this specification/requirement only structure, we believe this project will showcase what you can do as an individual and how you can work with a team at this point of the program. Because of this, we feel this project will be worth putting in your portfolio.

After completing the project, host your project on https://zeit.co/ and provide your mentor with the link.

Good luck and work hard!

# Color Palette & Font

<img src="https://github.com/DevMountain/simulation-3/blob/master/assets/style-guide.png" />

<b><a href="https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans">Google Font - Open Sans</a></b>

# Application Design

## Auth View

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/auth.png" />

## Dashboard View ( with and without recommendations )

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/dashboard-no-recommended.png" />

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/dashboard-recommended-gender.png" />

## Profile View

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/profile.png" />

## Search View

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/search-no-filter-top.png" />

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/search-no-filter-bottom.png" />

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/search-with-friends.png" />

<img src="https://github.com/DevMountain/simulation-3/blob/master/views/search-filter.png" />

# Technical Requirements - Front-end

## Auth View

* User can login/register through `auth0`.

## Dashboard View

* User can navigate to search view or profile view from this view.
* User can see recommended friends based on profile attributes.
* User should not appear in the recommended friends area.
* User can logout.
  * User should be navigated back to the Auth View when logging out.

## Profile View

* User can update their first name.
  * User should be able to type in an input field.
* User can update their last name.
  * User should be able to type in an input field.
* User can update their gender.
  * User should be able to select from a select box.
* User can update their hair color.
  * User should be able to select from a select box.
* User can update their eye color.
  * User should be able to select from a select box.
* User can update their hobby.
  * User should be able to select from a select box.
* User can update their birth day.
  * User should be able to select from a select box.
* User can update their birth month.
  * User should be able to select from a select box.
* User can update their birth year.
  * User should be able to select from a select box.
* User can click cancel to revert any un-updated changes.
* User can navigate to dashboard view or search view.
* User can logout.
  * User should be navigated back to the Auth View when logging out.

## Search View

# Technical Requirements - Back-end

* The back-end should be created using express.
* Massive should be used to establish a connection to your database.
* Express.static should be used to serve your production-ready front-end files.
* Authorization middleware should be used to make sure a user is logged in before modifying properties in any way.
  * If the middleware detects a user is not logged in, the back end should send a status of 403.
  * If the middleware detects a user is logged in, the back end should send the request to the final endpoint.
* Express sessions should be used to keep track of logged in users.

## Endpoints

### Authorization Endpoints

* POST - `/api/auth/login` - Sets the user information on the session.
  * On success return a status of 200 and the user object.
  * A user object should have the following properties:
    * `id` - This is the `UserId` you are using for your database.
    * `username` - This is the `username` associated with the `UserId`.
  * On failure return a status of 500.
* POST - `/api/auth/register` - Registers a user to the database. Sets the user information on the session.
  * On success return a status of 200 and the user object.
  * A user object should have the following properties:
    * `id` - This is the `UserId` you are using for your database.
    * `username` - This is the `username` associated with the `UserId`.
  * On failure return a status of 500.
* POST - `/api/auth/logout` - Destroys the session. Sends a status of 200.

### Properties Endpoints

* POST - `/api/properties` - Creates a new property. Returns all the properties associated with the logged in user.
* GET - `/api/properties` - Returns all properties associated with the logged in user.
* DELETE - `/api/properties/:id` - Deletes a property. Returns all the properties associated with the logged in user.
* GET - `/api/properties/filter` - Filters all properties by "desired rent". Returns all the filter properties associated with the logged in user.


