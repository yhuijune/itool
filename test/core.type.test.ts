import { getType, isNull } from '../src'

test('test getType', () => {
    expect(getType({})).toEqual('object');
    expect(getType(null)).toEqual('null');
})

test('test isNull', () => {
    expect(isNull(undefined)).toEqual(false);
    expect(isNull(null)).toEqual(true);
})