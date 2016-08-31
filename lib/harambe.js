var quotes = [
'RIP Harambe',
'#DOFH',
'RIP Harambe 1999-2016',
'#NeverForget'
];

module.exports = function() {
  return quotes[Math.floor(Math.random() * quotes.length)]
};

module.exports.kill = function() {
  process.on('exit', (code) => {
    console.log(quotes[Math.floor(Math.random() * quotes.length)]);
  });
};