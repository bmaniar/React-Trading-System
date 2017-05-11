import React from 'react';
import axios from 'axios';
import { shallow } from 'enzyme';
jest.dontMock('../src/components/main');
import MainComponent from '../src/components/main';
it('Server is working and giving data', (done) => {
    axios.get('http://localhost:8080/users')
        .then((res) => {
            expect(res.status).toBe(200);
            done();
        })
        .catch(done.fail);
})
it("Main Component rendering with fluid class checking", function() {
    expect(shallow(<MainComponent children={0}/>).is('.container-fluid')).toBe(true);
});