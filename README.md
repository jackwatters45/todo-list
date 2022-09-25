# todo-list

Next:
- Classes
- index in pseudo code / functions
- start implementing functions
- dom stuff

Notes:
- separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.
- use date-fns for dates
- use local storage to save data. set up a function that saves new todos and projects/views to local storage when create https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API tips: Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there! localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!

Things that I want to improve:
- overflow
- add transition for sidebar