/**
 * @file 文件相关API
 */

/**
 * @description 将file|blob|stream 转 DataURL
 */
export const blobToDataURL = (blob: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = (error) => {
            reject(error);
        };
    });
};

/**
 * @description 下载文件（通过a标签）
 */
export const download = ({
    name,
    content,
    type = 'text/plain'
}: {
    name: string;
    content: BlobPart;
    type?: string;
}) => {
    const link = document.createElement('a');
    const blob = new Blob([content], { type });
    link.style.display = 'none';
    link.download = name;
    link.href = URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
};

/**
 * @description 下载文件（通过window.open）
 */
export const downloadByOpen = (url: string | URL) => {
    window.open(url);
};
