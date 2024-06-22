NOTE! The folder "SomeScripts" shoudn't be downloaded.

To see your server in the Chrome browser, follow these steps:

Run the command "npm start"

Make sure the server is running:
You have already started the server, and the message Server is running on port 3000 indicates that the server has started successfully and is listening on port 3000.

Open Chrome browser:
Open your Chrome browser.

Go to:
In your browser's address bar, type http://localhost:3000 and press Enter.

Checking API routes
View all users:
Go to http://localhost:3000/users to see a list of all users in JSON format.

View user by ID:
Go to http://localhost:3000/users/1 to see user ID 1 (replace 1 with whatever ID exists in the database).

Sending POST, PUT and DELETE requests
To send POST, PUT and DELETE requests, you can use the Postman tool or a browser extension to send HTTP requests, such as Rested or RESTClient.




Example POST request to create a new user:
Open Postman or any other HTTP client.
Set the request method to POST.
Enter the URL http://localhost:3000/users.
Go to the Body tab and select raw, then select JSON.
Enter the request body, for example:
json
{
 "firstName": "John",
 "lastName": "Doe",
 "age": 30
}
Click Send and check the response.




Example PUT request to update a user:
Set the request method to PUT.
Enter the URL http://localhost:3000/users/1 (replace 1 with the ID of the user you want to update).
Go to the Body tab and select raw, then select JSON.
Enter the request body, for example:
json
{
 "firstName": "Jane",
 "lastName": "Doe",
 "age": 25
}
Click Send and check the response.
Example DELETE request to delete a user:
Set the request method to DELETE.
Enter the URL http://localhost:3000/users/1 (replace 1 with the ID of the user you want to remove).
Click Send and check the response.



Error processing
If you see errors or problems, make sure that:
Your server is actually running and listening on the correct port.
Your API routes are configured correctly and working.
You are correctly using an HTTP client to send requests.
If you have any additional questions or concerns, don't hesitate to ask for help!
