import { removeDuplicateObjByKey, classifyObjectArrayByKey, divideArrayByLength } from "../src/"

const arr = [
    { name: 'zs', age: 18 },
    { name: 'zs', age: 18 },
    { name: 'lz', age: 18 }
]

test('test removeDuplicateObjByKey', () => {
    const res = [
        { name: 'zs', age: 18 },
        { name: 'lz', age: 18 }
    ]
    expect(removeDuplicateObjByKey(arr, 'name')).toEqual(res)
})

test('test classifyObjectArrayByKey', () => {
    const res = [
        [{ name: 'zs', age: 18 }, { name: 'zs', age: 18 }],
        [{ name: 'lz', age: 18 }]
    ]
    expect(classifyObjectArrayByKey(arr, 'name')).toEqual(res)
})

test('test divideArrayByLength', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const res = [
        [1, 2, 3, 4, 5],
        [6, 7, 8]
    ]
    expect(divideArrayByLength(arr, 5)).toEqual(res)
})
