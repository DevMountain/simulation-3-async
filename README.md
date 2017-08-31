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

* All views need to check if the user is authenticated on mounting. If a user is not authenticated, navigate them back to the auth view. If a user is authenticated on the auth view, navigate them to the dashboard view.
  * The back-end technical requirements will help make sense of this.

## Auth View

* User can login/register through `auth0`.

## Dashboard View

* User can navigate to search view or profile view from this view.
* User can see recommended friends based on profile attributes.
  * The container for recommended friends should have overflow for scrolling large results.
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

* User can navigate to dashboard view or search view.
* User can logout.
  * User should be navigated back to the Auth View when logging out.
* User should see a list of friends / people to add as friends.
  * The container for these users should limit to 24.
  * Pagination should be used to navigate between pages of users.
* User can apply a filter by first or last name.
* User can reset an applied filter to get the entire list of users again.

# Technical Requirements - Back-end

* The back-end should be created using express.
* Massive should be used to establish a connection to your database.
* Express.static should be used to serve your production-ready front-end files.
* Express sessions should be used to keep track of logged in users.
* Passport should be used with passport sessions.
* In passport's `serializeUser` method:
  * Take the user's `id`, `first` name, and `last` name.
  * If there is no first or last name, default them with empty strings `''`.
  * Add another property called `picture` and use `https://robohash.org/me` as its value. This will give new users a robot picture.
* In passport's `deserializeUser` method:
  * Add the user to the database if they don't exist already.

## Endpoints

### Authorization Endpoints

* GET - `/api/auth/login` - Invokes the authenticate method on passport.
  * Should redirect to `/api/auth/setUser` on success.
  * Should redirect to `/api/auth/login` on failure.
* GET - `/api/auth/setUser` - Sets the user information on the session.
  * The endpoint should then redirect the user back to the dashboard view.
* GET - `/api/auth/authenticated` - Checks for the user object on session.
  * Sends a status of 200 and the user object if it is on session.
  * Sends a status of 200 and `false` if it is not on session.
    * You can check for `false` on the front-end and then route them back to the auth view.
* POST - `/api/auth/logout` - Destroys the session and sends a status of 200.

### Properties Endpoints

* POST - `/api/properties` - Creates a new property. Returns all the properties associated with the logged in user.
* GET - `/api/properties` - Returns all properties associated with the logged in user.
* DELETE - `/api/properties/:id` - Deletes a property. Returns all the properties associated with the logged in user.
* GET - `/api/properties/filter` - Filters all properties by "desired rent". Returns all the filter properties associated with the logged in user.


