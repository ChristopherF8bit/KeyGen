//FS aka file system is to read and write to the Keys.json files
const fs = require('fs')
//ReadLine, to get the users input
const readline = require('readline').createInterface({input: process.stdin,output: process.stdout});
//Add colors to the Terminal
const colors = require('colors')
//Functions to read Json files
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
        } catch (err) {
            return cb && cb(err);
        }
    });
}
//Get the Users Information
readline.question(colors.green('What Is Your Username? \n>'), Username => {
    readline.question(colors.green('Any Other Information? \n>'), Information => {
        jsonReader('./keys.json', (err, data) => {
            if(err){console.log(err)} else {
                //Loop through every key auntil there is one availible
                for(i = 1; i < data.KeyCount; i++) {
                    if(data[i].Availability === 'available') {
                        //Rell the user there key
                        console.log(colors.green(`Your Keys is: \n${colors.red.underline(data[i].Key)}`))
                        //Set the users data to the key
                        data[i] = {
                            "Key": data[i].Key,
                            "Availability": "unavailable",
                            "User": Username,
                            "ExtraInformation": Information,
                        }
                        //Write the json to the file
                        fs.writeFile('./keys.json', JSON.stringify(data, null, 2), err => {  
                            if (err){
                                console.log(err); 
                            } else {
                                //end the script
                                process.exit();
                            }
                        })
                        return;             
                    }
                }
            }
        }) 
    });
}); 