import { test, describe, expect } from '@jest/globals';
import factorial from './factorial';

interface factorialTestType {
    value: number,
    result: number
}
const factorialTests: factorialTestType[] = [
    {
        value: 1.2,
        result: -1
    },
    {
        value: 0,
        result: 1
    },

    {
        value: 4,
        result: 24
    },
    {
        value: 5,
        result: 120,
    },
    {
        value: 6,
        result: 720
    }, {
        value: 10,
        result: 3628800
    }];



test('Teste de factorial', () => {

    factorialTests.map((test) => {
        expect(factorial(test.value)).toBe(test.result);
    });
})