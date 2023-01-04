export default (e) => {
  const srcProjectId = e.path[2].id;
  const todoId = e.target.id;

  const data = { srcProjectId, todoId };
  e.dataTransfer.setData('text/plain', JSON.stringify(data));
};
