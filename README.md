# Twilio Phone Verification  
[![Build Status](https://travis-ci.org/gidkom/twilio-phone-verification.svg?branch=master)](https://travis-ci.org/gidkom/twilio-phone-verification)  

A NodeJS library to verify phone numbers using twilio's verification API


&nbsp;

## Installation

`yarn add twilio-phone-verification`

OR

`npm install --save twilio-phone-verification`    


## Usage

```   
import { Verification } from  'twilio-phone-verification';

const verify = new Verification(process.env.API_KEY);

// send verification code
verify.sendVerification(phoneNumber, countryCode, codeLength)
.then(res => console.log(res))
.catch(err => console.log(err))


// confirm verification code

verify.checkVerification(code, phoneNumber, countryCode)
.then(res => console.log(res))
.catch(err => console.log(err))

```
