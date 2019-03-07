import { expect } from 'chai';
import nock from 'nock';
import { Verification }  from '../src/index';
import {send, check} from './response';

const apikey = "0cd08abec2e9b9641e40e9470a7fc336";
const testUser = { phone: '825-589-8570', country: '57', code: '1337'};

/*
 *  Register Tests
 */
describe('Verify', () => {
    const verify  = new Verification(apikey);
    describe('Start verification', () => {
        beforeEach(() => {
            nock('https://api.authy.com/protected/json/phones/verification')
            .post('/start')
            .reply(200, send);
        });
        it('Should send verification code', async () => {
            const sendResp = await verify.sendVerification(testUser.phone, testUser.country);
            expect(typeof sendResp.data).to.equal('object');
            expect(sendResp.data.success).to.be.true;
        });
    });
    
    describe('Check verification', () => {
        beforeEach(() => {
            nock('https://api.authy.com/protected/json/phones/verification')
            .get('/check')
            .query({
                api_key: apikey,
                phone_number: testUser.phone,
                country_code: testUser.country,
                verification_code: testUser.code
            })
            .reply(200, check);
        });
        it('Should verify code', async () => {
            const checkResp = await verify.checkVerification(testUser.code, testUser.phone, testUser.country);
            expect(typeof checkResp.data).to.equal('object');
            expect(checkResp.data.success).to.be.true;
        });
    });
}); 