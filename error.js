module.exports =
function error(err) {
  console.error((err.message || err.stack || err).toString().red);
  process.exit(1);
};