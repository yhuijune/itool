/**
 * @file 常用数组方法
 */

interface UnknownObject {
    [key: string]: any;
}

/**
 * @description 对象数组根据对象的某一属性进行数组去重
 */
export const removeDuplicateObjByKey = <T extends UnknownObject>(
    dataSource: T[],
    key: keyof T
) => {
    const map = new Map();
    return dataSource.filter((item) => {
        const value = item[key];
        return value && !map.has(value) && map.set(value, 1);
    });
};

/**
 * @description 对象数组根据某一属性进行分类返回二维数组
 */
export const classifyObjectArrayByKey = <T extends UnknownObject>(
    dataSource: T[],
    key: keyof T
) => {
    const values = new Set(dataSource.map((item) => item[key]));
    const result: T[][] = [];
    values.forEach((value) => {
        result.push(dataSource.filter((item) => item[key] === value));
    });
    return result;
};

/**
 * @description 将一维数组按长度分割为二维数组
 */
export const divideArrayByLength = <T>(dataSource: T[] = [], length: number) => {
    if (dataSource.length > 0 && length > 0) {
        const res = [];
        const arrLength = dataSource.length;
        for (let i = 0; i < arrLength; i += length) {
            const group = dataSource.slice(i, i + length);
            res.push(group);
        }
        return res;
    }
    return dataSource;
};
