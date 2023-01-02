export default (e) => {
  // transfer data to drop
  const data = { id: e.target.id };
  e.dataTransfer.setData('text/plain', JSON.stringify(data));
};
