

// In Node.js, JavaScript can read files directly. ✅

// In the browser, JavaScript cannot read files directly without user interaction. ❌

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});


