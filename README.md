# KeyGen

## Descriptions 
KeyGen has 2 files, one that Genarates the Keys and one that Grabs the keys. The script was made as a Demo, and for a base when making a service that requires Authentication, The Script can be added into any Node Js projects pretty easaly thanks to its simple design. The 2 scripts are ment to work together by shareing one file, This file can easaly be replaced with an custom API to make a secure system where the user has to pay for your Services and the keys can act as a password to your Application.

### How To Use
```
Step 1: Start by running node . | by default this will run the index.js file whice will log 2 things, 
        One being the KeyGen script command and the other being the GrabKey command
Step 2: Run the GenKeys command to genarate your keys inside the keys.json
Step 3: Run the GrabKeys command to grab a key, when running this script it will ask for 2 things,
        First: Username,
        Seccond: Extra Information,
        These can be changed to name and email, or anything you choose, once entering the disired
        information, The script will grab an available key then it will set the information to 
        that key in Keys.json.
```
### How To Customize
Head over to the GenKeys file, there are a few variables that can be changed with out ant coding needed, Such as ```chars, key, Ammount,max, and min.``` Changing these will affect the keys genarated,

### Information 
```
Made by: ChristopherF
Discord: Kiptric#7598
Email: christoperf8bit@gmail.com
This code is free to use.
```
