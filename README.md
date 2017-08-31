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

* User can login into their account.
* User can register for an account.
* User should be navigated to the Dashboard View on a successful login or successful registration.

## Dashboard View

* User can view a listing of all their properties. 
* User can filter their properties by "desired rent".
* User can reset an applied filter to see a list of all their properties again.
* User can add a new property.
  * User should be navigated to the Wizard View when attempting to create a new property.
* User can logout.
  * User should be navigated to the Auth View.

## Wizard View

* User should be able to see which step they are on, which steps they have completed, and how many steps are left at all times. This concept is shown in the screenshots above. 
* User input should be remembered across all steps. 
  * Example: If a user inputs information on step 1, navigates to step 2, and then navigates back to step 1: the user's input should populate in the input fields.
  * It is acceptable if user information is lost on refresh.
* User can click cancel on any step to cancel the creation wizard and be navigated back to the Dashboard View.
* User can navigate to the previous or next step, if available, on all steps.
  * For example: Step 1 should not show a previous step button since it is the first step. It should however show a next step button.
* User can logout on any step.
  * User should be navigated to the Auth View.
* Step 1
  * User can set a property's name and description.
* Step 2
  * User can set a property's address, city, state, and zip code.
* Step 3
  * User can set a property's image using a URL.
  * User can see a preview of the image.
    * The image cannot break out of the preview container if the image is bigger.
    * The preview container's size should remain static.
* Step 4
  * User can set a property's loan and mortgage amount.
* Step 5
  * User can set a property's desired rent.
  * User should be able to see a recommend rent that we calculate for them.
    * The recommend rent we provide should be the result of the monthly mortage + 25%.
      * For example: The recommend rent for a monthly mortgage of $500 is $625.
  * User can complete the wizard process.
    * User should be navigated back to the Dashboard View and see the newly created property in their property list.

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


