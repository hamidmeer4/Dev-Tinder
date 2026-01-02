

S2-Epi-04 Create our Express Server (Practical)

Create repository

Initialize the repository

Install express

Create server and listen it to 7777

Write request handler for test hello

Install nodemon

Difference between node_modules, package.json, package-lock.json

What are dependencies

What is the use of -g while npm install

Difference between caret (^) and tilde (~)



S2-Epi-05 Routing and Request Handlers

Play with routes and extensions

Practice routes like /hello, /hello/2, /hello/user/101

Understand order of routes matter

Set routes like /hello

Test APIs in Postman

Write logic to handle GET, POST, PATCH, DELETE API calls

Test all APIs in Postman

Use *?, +, , () in routes (Regex)

Explore routes with Regex

Read dynamic routes like /a/, /.*fly$/




S2-Epi-06 Middleware and Error Handling

Create basic route

Create multiple route handlers

Use next()

Play with code and create multiple route handlers

Use multiple route handlers in an array

Separate same user routes using next()

Understand order matters in routes

Handle multiple user routes

What is middleware

How Express.js works behind the scenes (BTS)

Middleware chain

Why we need middleware

HTTP status codes

Difference between app.use and app.all

Setup middleware folder

Create auth middleware file

Write dummy auth and admin middleware for user routes

Error handling using try-catch




S2-Epi-07 Diving into the APIs

Difference between Object vs JSON

API: Signup user dynamically to receive data from end user

user.findOne with duplicate email IDs – what object is returned

API: Get user by email

API: Feed API – get all users from DB

API: Get user by ID

API: Create & delete user

Difference between PATCH vs PUT

API: Update user

Explore Mongoose documentation for model methods

API: Update user by email





Episode-08 | Data Sanitization & Schema Validations

Explore SchemaType options from documentation

Add required, unique, etc.

Add default values

Create custom validator function for gender

Improve DB schema with proper validators

Add timestamps to userSchema

Add API-level validation on PATCH and Signup POST APIs

Data sanitization using API validators

Add validators for photoURL, firstName, etc.

Install validator package

Explore validator library functions

Validate password, email, photoURL

Never trust req.body 😄

Episode-09 | Encrypted Password

Validate signup API

Install bcrypt package

Create password hash and store encrypted password

Create login API

Compare password and throw error if email or password is invalid





Episode-10 | Authentication, JWT & Cookies

Install cookie-parser
Send a dummy cookie to user  //  res.cookie("token","hahhaahhahahsdjkmdkkdkdkkkkkd")
Create GET /profile API and check cookie
In login API, create JWT token
Install jsonwebtoken
After login validation, create JWT and send it in cookies
Read cookies inside profile API
Find logged-in user from JWT
Write userAuthMiddleware
Add auth middleware to profile & sendConnectionRequest API
Set JWT token and cookie expiry to 7 days
Create userSchema method getJWT()
Create userSchema method comparePassword(passwordInputByUser)