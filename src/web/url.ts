/**
 * @file URL相关API
 */

import { getType } from '@/core/type';

export interface UnknownObject {
    [key: string]: any;
}

/**
 * @description 将对象拼接成查询字符串
 */
export const stringfyQuery = (query: UnknownObject) => {
    if (getType(query) === 'object' && Object.keys(query).length) {
        const pairs = Object.entries(query).map(
            ([key, value]) => `${key}=${value}`
        );
        return `?${pairs.join('&')}`;
    }
};

/**
 * @description 将查询字符串转换为对象
 */
export const parseQueryString = (url: string) => {
    if (getType(url) !== 'string') return;
    if (!url.includes('?')) return;
    const [_, queryString] = decodeURIComponent(url).split('?');
    if (!queryString) return;
    const result: UnknownObject = {};
    queryString.split('&').map((item) => {
        const [key, value] = item.split('=');
        if (key) {
            result[key] = value;
        }
    });
    return result;
};

/**
 * @description 获取查询字符串的某个属性值
 */
export const getQueryByKey = (
    url: string = '',
    key: string
): string | undefined => parseQueryString(url)?.[key];
