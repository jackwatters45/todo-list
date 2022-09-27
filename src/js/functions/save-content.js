
//  function that saves the projects (and todos) to localStorage every time a new project (or todo) is created
export default function saveContent(content){
    let contentType = content.constructor.name.toLowerCase()
    let contentId = content.id.toLowerCase()
    localStorage.setItem(`${contentType}-${contentId}`, JSON.stringify(content));
}