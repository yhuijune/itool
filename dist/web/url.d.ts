/**
 * @file URL相关API
 */
export interface UnknownObject {
    [key: string]: any;
}
/**
 * @description 将对象拼接成查询字符串
 */
export declare const stringfyQuery: (query: UnknownObject) => string | undefined;
/**
 * @description 将查询字符串转换为对象
 */
export declare const parseQueryString: (url: string) => UnknownObject | undefined;
/**
 * @description 获取查询字符串的某个属性值
 */
export declare const getQueryByKey: (url: string | undefined, key: string) => string | undefined;
