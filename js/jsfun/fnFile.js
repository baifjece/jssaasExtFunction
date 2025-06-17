//===============================================================================
//说明：
//================================================================================

/**
 * 取得文件信息
 * @param {string} file
 * @returns {{}}
 */
function fnFile_getInfo(file) {
    let result = JsaFile.getInfo(file)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 取得文件二进制数据
 * @param {string} file
 * @returns {Uint8Array}
 */
function fnFile_getFileByte(file) {
    let result = JsaFile.getFileByte(file)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 取得文件文本
 * @param {string} file
 * @returns {string}
 */
function fnFile_getFileContent(file) {
    let result = JsaFile.getFileContent(file)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 保存文本文件,追加或覆盖文件内容
 * @param {string} file
 * @param {string} content
 * @param {boolean} overwrite 是否覆盖文件内容
 * @returns {boolean}
 */
function fnFile_saveFile(file, content, overwrite = false) {
    let result = JsaFile.saveFile(file, content, overwrite)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 保存二进制文件,追加内容
 * @param {string} file
 * @param {Uint8Array} bytes
 * @param {boolean} overwrite 是否覆盖文件内容
 * @returns {boolean}
 */
function fnFile_saveFileByte(file, bytes, overwrite = false) {
    let result = JsaFile.saveFileByte(file, bytes, overwrite)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 删除文件或空目录,删除目录及下面的全部内容
 * @param {string} fileName
 * @returns {boolean}
 */
function fnFile_remove(fileName) {
    let result = JsaFile.remove(fileName)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
