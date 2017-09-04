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
* User should see an error message that the birthday fields are required in order to update the profile.
  * See live example on this works.

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
  * Sends a status of 403 if it is not on session.
* POST - `/api/auth/logout` - Destroys the session and sends a status of 200.

### Friend Endpoints

* GET - `/api/friend/list` - Lists all friends of the logged in user.
  * Sends a status of 200 and a list of user IDs that are friends of the logged in user.
* POST - `/api/friend/add` - Adds a friend to the logged in user's friend list.
  * Sends a status of 200 with the updated list of user IDs that are friends of the logged in user.
* POST - `/api/friend/remove` - Removes a friend from the logged in user's friend list.
  * Sends a status of 200 with the updated list of user IDs that are friends of the logged in user.

### User Endpoints

* PATCH - `/api/user/patch/:id` - Updates a user's attribute(s).
  * Sends a status of 200 and the updated user object.
* GET - `/api/user/list` - Returns a list of 24 users.
  * This endpoint should count how many users there are, not including the logged in user.
  * This endpoint should calculate how many available pages there are for pagination.
    * Hint: Total user count. 24 users per page.
  * This endpoint should handle the pagination of users.
    * Hint: Query offsets and limits.
  * Sends a status of 200 with the user count, number of pagination pages, and 24 user objects.
* GET - `/api/user/search` - Return all users that meet the search criteria.
  * Sends a status of 200 and all the users that meet the criteria.

### Recommended Endpoints

* POST - `/api/recommended` - Return a list of user's with the same property ( first name, hobby, etc..).
  * Sends a status of 200 and a list of user objects.
  * The logged in user shouldn't appear in this list.
* POST - `/api/recommended/add` - Adds friend then updates recommended list.
  * When a user gets added, that user should no longer appear in the recommended area until that user is unfriended.
  * Sends a status of 200 and an updated list of user objects.
    * For example: If recommendations are being shown off of the same first name, the endpoint should re-run the query to find all recommended users with the same first name again. 

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>
