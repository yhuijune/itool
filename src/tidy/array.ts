/**
 * @file 常用数组方法
 */

interface UnknownObject {
    [key: string]: any;
}

/**
 * @description 对象数组根据对象的某一属性进行数组去重
 */
export const removeDuplicateObjByKey = (dataSource: UnknownObject[], key: string) => {
    const map = new Map();
    return dataSource.filter(item => {
        const value = item[key]
        return value && !map.has(value) && map.set(value, 1)
    })
}

/**
 * @description 对象数组根据某一属性进行分类返回二维数组
 */
export const classifyObjectArrayByKey = (dataSource: UnknownObject[], key: string) => {
    const values = new Set(dataSource.map(item => item[key]))
    const result: UnknownObject[][] = [];
    values.forEach(value => {
        result.push(dataSource.filter(item => item[key] === value))
    })
    return result
}

/**
 * @description 将一维数组按长度转换为二维数组
 */
export const divideArrayByLength = <T>(dataSource: T[] = [], length = 0) => {
    if (Array.isArray(dataSource) && dataSource.length > 0 && length > 0) {
        const res = []
        const arrLength = dataSource.length
        for (let i = 0; i < arrLength; i += length) {
            const group = dataSource.slice(i, i + length)
            res.push(group)
        }
        return res
    }
    return dataSource
}
