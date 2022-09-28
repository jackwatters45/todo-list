export default function saveContent(projectBoard){
    // saves the project board object to local memory
    localStorage.setItem(`Project Board`, JSON.stringify(projectBoard));
}