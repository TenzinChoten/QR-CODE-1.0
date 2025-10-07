/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
.prompt([ {
    type: 'input',
    name: 'url',
    message: 'Enter the URL'
}
])

.then((answer) => {
    const url = answer.url;
    var qr_code = qr.image(url);
    qr_code.pipe(fs.createWriteStream('qr_code.png'));

    fs.writeFile('url_text.txt', url, (err) => {
        if (err) console.log(err);
        console.log("URL txt file and the qr-code is created")
    })
})

.catch((err) => {
    if (err) throw(err);
})

