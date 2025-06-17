//================================================================================
//说明：
//================================================================================

/**
 * 发送短消息
 * @param {string} accessKeyId
 * @param {string} accessSecret
 * @param {string} signname
 * @param {string} templatecode
 * @param {string} templateparam
 * @param {string} tel
 * @returns {boolean}
 */
function  plugin_aliyun_SMS(accessKeyId,accessSecret,signname,templatecode,templateparam,tel) {
    let result=  PLUGIN_aliyun_SMS(accessKeyId,accessSecret,signname,templatecode,templateparam,tel) ;
    if (result["errcode"]<0){
        throw (result.msg) ;
    }
    return result.data
}

/**
 * 保存到OSS网盘
 * @param {string} yourAccessKeyId
 * @param {string} yourAccessKeySecret
 * @param {string} yourEndpoint
 * @param {string} yourBucketName
 * @param {string} fileName
 * @returns   boolean
 */
function  plugin_aliyun_SaveOSS(yourAccessKeyId, yourAccessKeySecret, yourEndpoint, yourBucketName, fileName) {
    let result=  PLUGIN_aliyun_SaveOSS(yourAccessKeyId,yourAccessKeySecret,yourEndpoint,yourBucketName, fileName) ;
    if (result["errcode"]<0){
        throw (result.msg) ;
    }
    return result.data
}

/**
 * 取得token
 * @param {string} yourAccessKeyId
 * @param {string} yourAccessKeySecret
 * @param {string} host
 * @param {string} folderPath
 * @param {string} callbackUrl
 * @returns {string}
 */
function  plugin_alyun_OSS_ServerToken(yourAccessKeyId, yourAccessKeySecret, host, folderPath, callbackUrl) {

    let result = PLUGIN_alyun_OSS_ServerToken(yourAccessKeyId, yourAccessKeySecret, host, folderPath, callbackUrl);
    console.log(result)
    if (result.code < 0) {
        console.error(result.msg);
        return "";
    }

    return result.data;
}


