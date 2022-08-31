/**
 * @file 文件相关API
 */

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
 * @description 图片URL 转 DataUrl
 */
type ImageType = 'png' | 'gif' | 'jpg' | 'jpeg' | 'svg'

export const getImgBase64 = (url: string, type: ImageType) => {
    const image = new Image();
    image.src = url;
    return new Promise((resolve, reject) => {
        image.onload = () => {
            let mimetype;
            switch (type) {
                case 'svg': {
                    mimetype = 'image/svg+xml'
                    break;
                }
                case 'png':
                case 'gif':
                case 'jpg':
                case 'jpeg': {
                    mimetype = `${image}/${type}`
                    break;
                }
                default: {
                    mimetype = 'image/png'
                }
            }
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d")
            const { width, height } = image
            canvas.width = width;
            canvas.height = height;
            ctx?.drawImage(image, 0, 0, width, height);
            const dataUrl = canvas.toDataURL(mimetype)
            resolve(dataUrl)
        }
        image.onerror = (evt) => {
            reject(evt)
        }
    })
}