//================================================================================
//说明：时间操作
//================================================================================


/**
 *  压缩
 * @param {string} filePath 文件、目录、文件数组、map数据{"/aa.txt":"txt/aa.txt","/bb.txt":"bb.txt}
 * @param {string} pZipFile zip文件不存在则新增，存在追加
 * @returns {boolean}
 */
function fnZip_zip(filePath,pZipFile) {
    let result = JsaZip.zip(filePath,pZipFile)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 解压
 * @param {string} zipfile
 * @param {string} des
 * @returns {string[]}
 */
function fnZip_unzip(zipfile,des) {
    let result = JsaZip.unzip(zipfile,des)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
/**
 * 解压
 * 解压指定文件
 * @param {string} pZipFile
 * @param {string} pDesPath
 * @param {string} pFiles 指定需要解压的文件，如["emptyproject/readme.txt", "emptyproject/event/", "config_web.json"]
 * @returns {boolean}
 */
function fnZip_unzipFile(pZipFile,pDesPath,pFiles) {
    let result = JsaZip.unzipFile(pZipFile,pDesPath,pFiles)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
