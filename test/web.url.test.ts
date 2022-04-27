import { stringfyQuery, parseQueryString, getQueryByKey } from '../src'

test('test stringfyQuery', () => {
    expect(stringfyQuery({})).toEqual(undefined);
    expect(stringfyQuery({ name: 'zs', age: 18 })).toEqual('?name=zs&age=18');
})

test('test parseQueryString', () => {
    expect(parseQueryString('')).toEqual(undefined);
    expect(parseQueryString('https://www.baidu.com')).toEqual(undefined);
    expect(parseQueryString('https://www.baidu.com?')).toEqual(undefined);
    expect(parseQueryString('https://www.baidu.com?name')).toEqual({ name: undefined });
    expect(parseQueryString('https://www.baidu.com?name=zs&age=18')).toEqual({ name: 'zs', age: '18' });
    expect(parseQueryString('http://so.jb51.net/cse/search?q=%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7&click=1&')).toEqual({ q: '在线工具', click: '1' })
})

test('test getQueryByKey', () => {
    expect(getQueryByKey('https://www.baidu.com', 'f')).toEqual(undefined);
    expect(getQueryByKey('https://www.baidu.com?name=zs&age=18', 'age')).toEqual('18');
    expect(getQueryByKey('http://so.jb51.net/cse/search?q=%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7&click=1&', 'q')).toEqual('在线工具')
})