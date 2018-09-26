import axios from 'axios';
import { confirmUrl, verifyUrl } from './config';


class Verification {

    constructor (apiKey) {
        this.apiKey = apiKey;
    }

    /**
     * send verification code
     * @param {string|number} phoneNumber - phone number to verify
     * @param {number} countryCode - country code
     * @param {number} codeLength - length of code
     * @return {Promise}
     */
    async sendVerification(phoneNumber, countryCode, codeLength = 4) {
        let response;
        try {
            response = await axios.post(verifyUrl, {
               api_key: this.apiKey,
               via: 'sms',
               phone_number: phoneNumber,
               country_code: countryCode,
               code_length: codeLength

           });
        }
        catch (err) {
            throw new Error(err);
        }

        return response;
    }
    /**
     * check verification code
     * @param {number} code - code sent
     * @param {string|number} phoneNumber - phone number to verify
     * @param {number} countryCode - country code
     * @return {Promise}
     */
    async checkVerification(code, phoneNumber, countryCode, ) {
        let response;
        try {
            response = await axios.get(confirmUrl, {
                params: {
                    api_key: this.apiKey,
                    verification_code: code,
                    phone_number: phoneNumber,
                    country_code: countryCode
                }
            })
        }
        catch(err) {
            throw new Error(err);
        }
        return response;
    }
}


export default Verification;
