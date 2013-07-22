guestbook
=========

simple GAE example

A webapp2 application has two parts:
one or more RequestHandler classes that process requests and build responses
a WSGIApplication instance that routes incoming requests to handlers based on the URL

This version has two handlers: 
MainPage, mapped to the URL /, displays a web form. 
Guestbook, mapped to the URL /sign, displays the data submitted by the web form.

The Guestbook handler has a post() method instead of a get() method. 
This is because the form displayed by MainPage uses the HTTP POST method (method="post") 
to submit the form data. If for some reason you need a single handler to handle both 
GET and POST actions to the same URL, you can define a method for each action in the 
same class.

The code for the post() method gets the form data from self.request. 
Before displaying it back to the user, it uses cgi.escape() to escape HTML special 
characters to their character entity equivalents. cgi is a module in the standard 
Python library; see the documentation for cgi for more information.