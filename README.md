# Twilio Phone Verification

A NodeJS library to verify phone numbers using twilio's verification API

&nbsp;

## Installation

`yarn add twilio-phone-verification`

OR

`npm install --save twilio-phone-verification`    


## Usage

```   
import { Verification } from  'twilio-phone-verification';
  
let verify = new Verification(process.env.API_KEY);

// send verification code
verify.sendVerification('024xxxxxxx', '233', 4)
.then(res => console.log(res))
.catch(err => console.log(err))


// confirm verification code
verify.checkVerification('3432','024xxxxxxx', '233')
.then(res => console.log(res))
.catch(err => console.log(err))

```
