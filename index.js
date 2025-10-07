

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

