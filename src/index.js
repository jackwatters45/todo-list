
// an individual to do object
class todo {
    constructor(title, status, date =  new Date().toLocaleDateString(), notes = undefined, done = false){
        this.title = title;
        this.status = status;
        this.date = date;
        this.notes = notes;
        this.done = done;
    }

    // methods
}

// an individual project object - contain sperate lists of todos 
class project {

}

// probably also will be implemented as a project but their should be a default project and then the user can create views/other projects
class view {

}

// separate your application logic (i.e. creating new todos, setting todos as complete, changing todo priority etc.) from the DOM-related stuff, so keep all of those things in separate modules.

// User interface - should be able to do the following: 1. view all projects 2. view all todos in each project (probably just the title and duedate… perhaps changing color for different priorities) 3. expand a single todo to see/edit its details 4. delete a todo

// add date-fns to code

// use local storage to save data. set up a function that saves new todos and projects/views to local storage wehn create
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
// tips: Make sure your app doesn’t crash if the data you may want retrieve from localStorage isn’t there! localStorage uses JSON to send and store data, and when you retrieve the data, it will also be in JSON format. You will learn more about this language in a later lesson, but it doesn’t hurt to get your feet wet now. Keep in mind you cannot store functions in JSON, so you’ll have to figure out how to add methods back to your object properties once you fetch them. Good luck!