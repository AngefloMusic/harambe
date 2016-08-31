# harambe

Harambe is a simple Node.js module that allows you to insert a Harambe into your site, or view one through the command line.

## Usage

Simply install through npm by running...

    npm install harambe

...and require the module from your Node.js application. You're good to go! Either insert a single (random) quote, or retrieve a list containing all of the available quotes.

```javascript
const harambe = require('harambe');

console.log(harambe()); // "No. I am your Father."
console.log(harambe()); // "Great shot kid, that was one in a million."
console.log(harambe.quotes); // ["No. I am your Father.", "Great shot kid, that was one in a million.",...]
```

### Command Line

harambe can also be used within the command line. Simply install globally through npm by running...

    npm install harambe -g

...and then typing `harambe` into your console. A random quote will then be displayed on the screen (especially helpful if you're having a bad day and need to read some inspirational text).

You can also type `harambe -all` into your console to display all of the available quotes.
