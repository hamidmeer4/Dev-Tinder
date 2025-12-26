
S2-Epi-04 Create our express server

- Practicall 

Create Repository 
Initialize the repository 
install express
create server and listen it to 7777
write request handler for test helllo 
install nodemon
diff node_modules , package.json, package-lock.json
waht are dependencies 
what is use of -g while npm install ?
diff b/w caret and telda?



S2-Epi-05 Routing and request handler...
play with routes and extention means /hell , hello/2 , hello/user/101 ...
order of routes matter practice / then set routes /hello
test api in postman 
write logic to handle get, post , patch and delete api call test on them on postman 
?, + , * , () use regix in routes 
explore routes with regix 
reading the dynmic routes /a/ , /.*fly$/...



S2-Epi-06 Middleware and Error handling...
create basic route
then create multiple route handler 
then use next()
then play with code and create multiple route handler
multiple route in array..


separate same user route using next().
order matter / then user route multiple route
what is middleware 
how express js basically work bts
middleware chain 
why we need to middleware
http status code 
diff b/w app.use and app.all
set up to middleware create folder give file name auth
write dummy auth and admin for all user router 
error handling using try catch.




S2-Epi-07 Diving into the API's...
diff  b/w object vs json 
API - make you signup dynamic to recieve data from the end user
user.findOne with dublicate email ids which object returend
API - get user by email
API - Feed api get all user frkm the db 
API - get user by ID
API - create delete user API
diff patch and put 
API - update user 
explore mongooose documentation for model method 
API - update the USer by email,



Episode-08 | Data Sanitization & Schema Validations
explore schemaType options from the documentation .
add required , unique and so on your side....
add default.
create custome validate function for gender .
improve the DB schema , put all appropriate validatore for each field .
add timesstamps to the userSchema.
add api level validation on patch request & signup post api.
Data sanitization - add api validator for each field like photoURl, first name .... 
install validator..
explore validator library function user validator function for password, email, photoURL,
Never Trust req.body ...heheh  

Episode-09 | Encrypted Password 
validate the signup api...
install bcrypt package 
create passwordHas ussing & save the user is excrupted password
create login api 
caompare password and throw error if email or password is invalid .
