const figlet = require('figlet');

const textToArt = 'Hello, World!';

const figletOptions = {
  font: 'Ghost',
};

figlet(textToArt, figletOptions, (err, data) => {
  if (err) {
    console.error('Errore durante la conversione in arte testuale:', err);
    return;
  }
  console.log(data);
});
