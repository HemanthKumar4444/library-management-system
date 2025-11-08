# library-management-system

This is a Library Managment API backend for the management of users and the books

# Routes and Endpoints

## /users

GET: get all the list of users in the system
POST: create/register a new user

## /users{id}

GET: get a user by their ID
PUT : Updating the user by their ID
DELETE: Deleting a user by their ID (check if the user still has an Issued book) && (is there any penalty or fine to be collected)

## /users/subscription-details/{id}

GET: Get a user subscription details by their ID >> Date of subscription >> Vaild till ? >> Fine if any ?

## /books

GET: Get all the books in the system
POST: Add a new book to the system

## /books/{id}

GET: Get a book by its ID
POST: Update a book by its ID
DELETE: Delete a book by its ID

## /books/issued

GET: Get all the issued books

## /issued/books/withFine

GET:Get all the issued books with their fine amount

### Subscription Types

    >> Basic (3 months)
    >> Standard (6 months)
    >> Premium (12 months)

> > If the user missed the renewal date, then user should be collected with $100

> > If the user missed the subscription, then user is expected to pay $100

> > If a user missed both subscription and renewal date, then amount to collected is $200

# commands

npm init
npm i express
npm i nodemon --save-dev

npm run dev

> > to restore node modules and package-lock.json use -----> npm i or npm install
