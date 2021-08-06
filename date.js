module.exports = (done) => {
  let date = new Date();
  done(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
}
