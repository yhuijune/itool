/**
 * @file 数据类型相关API
 */

/**
 * @description 获取数据类型
 */
export const getType = (data: unknown) =>
    Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

/**
 * @description 判断数据是否为Null
 */
export const isNull = (value: unknown): value is null =>
    getType(value) === 'null';
