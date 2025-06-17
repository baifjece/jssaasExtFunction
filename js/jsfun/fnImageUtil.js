//================================================================================
//说明：图片操作
//================================================================================


/**
 * 取得image资源，读取文件
 * @param {string} imageFile
 * @returns {{}}
 */
function fnImage_imageFromFile(imageFile) {
    let result = JsaImageUtil.imageFromFile(imageFile)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 图片尺寸
 * @param {string|GoImage} imageFile 图片路径或图片image资源
 * @returns {{}}
 */
function fnImage_imageSize(imageFile) {
    let result = JsaImageUtil.imageSize(imageFile)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}


/**
 * 图片验证码
 * @param {string} validnumcode 验证码
 * @param {number} width 宽度
 * @param {number} height 高度
 * @param {number} fontsize 字体大小
 * @param {boolean} fillCircle 是否填充圆点
 * @param {boolean} fillStrike 是否填充线段
 * @param {string} fontFile 字体路径
 * @returns {string}
 */
function fnImage_validCode(validnumcode,  width, height, fontsize=20,fillCircle=false, fillStrike=false, fontFile=undefined) {
    let result = JsaImageUtil.validCode(validnumcode,  width, height, fontsize ,fillCircle , fillStrike , fontFile)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 生成二维码
 * @param {string} content 二维码内容
 * @param {number} size 像素大小，长或宽
 * @param {boolean} hasBorder 是否包含边框
 * @returns string
 */
function fnImage_qrcode(content,size,hasBorder=true) {
    let result = JsaImageUtil.qrcode(content,size,hasBorder)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 *  解码二维码
 * @param {string|GoImage} imageFile 图片路径或图片资源
 * @returns string
 */
function fnImage_deQrcode(imageFile) {
    let result = JsaImageUtil.deQrcode(imageFile)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}



