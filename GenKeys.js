//FS aka file system is to read and write to the Keys.json files
const fs = require('fs')
//All possible charecters on a keyboard mixed up
const chars = "0EFGHRSTz!@#345Q6789apqrstuvwxyijklmnJK%^&*()ABb$IefLMNOPgh12cdoCDUVWXYZ+_-!@#$^(*?>?>LHASKHL:DHN)_(*N*&)NY*(N*&)(N*()YN*)(NY*)(^T(IGYOVIGVFYBNBIVNFGTIBVG((&*^&(*&(*&*()o{p}&*(#&*()&*)($";
//The ammount of keys Genarated
const keyAmmount = 100
//Size Of the Keys
const max = 88
const min = 64
//Define The list of Keys
const keys = ['']
//Genarate the keys Function
function GenKey() {
    //Define the Key
    let password = "";
    //Get the size of the key based on Min and Max
    let difference = max - min;
    let rand = Math.random();
    PswLength = Math.floor( rand * difference);
    PswLength = PswLength + min;
    //Genarate the key depending on the PswLength AKA the key size
    for (var i = 0; i <= PswLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    //Add the Key to the list
    keys.push(password)
}
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
//read the keys.json file
jsonReader('./keys.json', (err, data) => {
    //Make sure theres no error
    if(err){console.log(err)} else {
        for(i = 0; i < keyAmmount; i++) {
            //Run the GenKey function
            GenKey()
            //make sure keys always start at 1
            if(i === 0) {
                data = {}   
            } else {
                //Define the data that goes along with the Keys
                data[i] = {
                    'Key' : keys[i],
                    'Availability' : 'available',
                    'User' : false,
                    'ExtraInformation' : false
                }
                //Add a KeyCount to the Keys.json for refrence
                data.KeyCount = keyAmmount - 1
                //Write the data to the Json File
                fs.writeFileSync('./keys.json', JSON.stringify(data, null, 2), err => {  
                    if (err){
                        console.log(err); 
                    }
                })
            }
        }
    }
})