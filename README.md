# Car-Rental

[Car-Rental](http://morgamrent.ddns.net) is a React application focused on the interaction with a Spring REST server.

The data-centric application offers a basic user-management section, with the possibility to sign-in new users.
Each user can manage a list of glee-levels, each one associated to a date, time and a comment.
There are two different roles:
* Admin: has full permissions on the whole data
* User: has full permissions on owned glee data.

The application has the following features:
* data access with pagination, sorting, ordering and filtering;
* CRUD operations on whole data;
* sign-in to permit the registration of new users;
* authentication based on oauth2 JWT, with token refresh;
* consumes REST resources `/products` and `/reservations`;

The server side is implemented with Spring boot, runned on an AWS EC2 instance.
Server implementation features the following:
* oauth2 JWT authentication with spring-boot, using grant types `password` and `refresh token`;
* publish 2 authenticated REST resources `/api/glee`, `/api/users` and one public `/api/signin` for user registration;
* method-level authorization based on `@PreAuthorize` and `@PostAuthorize`;
* data access based on logged user's permissions;
* Spring based JSR-349 data validation;
* CORS configuration for running separated local server and client development environments;


A [running version](http://morgamrent.ddns.net) is deployed on a AWS S3 Bucket.

Available users are:

|User email|Password|Role|
|----------|--------|----|
|admin@admin.com|pwd|Admin|
|userman@userman.com|pwd|User manager|
|user1@user1.com|pwd|User|
|user2@user2.com|pwd|User|
|...|
