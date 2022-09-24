

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

