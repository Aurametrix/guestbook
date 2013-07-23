# Guestbook
############

simple GAE example
Users can log-in with their Google account and enter messages in multiple guestbooks
messages are stored in App Engine High Replication Datastore (HRD) 
and retrieved using a strongly consistent (ancestor) query.

A webapp2 application has two parts:
one or more RequestHandler classes that process requests and build responses
a WSGIApplication instance that routes incoming requests to handlers based on the URL
http://webapp-improved.appspot.com/

This version has two handlers: 
MainPage, mapped to the URL /, displays a web form. 
Guestbook, mapped to the URL /sign, displays the data submitted by the web form.

The Guestbook handler has a post() method instead of a get() method. 
The code for the post() method gets the form data from self.request. 
Before displaying it back to the user, it uses cgi.escape() to escape HTML special 
characters to their character entity equivalents. cgi is a module in the standard 
Python library

## APIs
- [Data Modeling NDB Datastore API]
from google.appengine.ext import ndb
https://developers.google.com/appengine/docs/python/ndb/

- [Users API]
from google.appengine.api import users
https://developers.google.com/appengine/docs/python/users/

## Templating System to keep HTML separately from the code 
Jinja2  (EZT, Cheetah, ClearSilver, Quixote, Django ...)
http://jinja.pocoo.org/docs/