//================================================================================
//说明：文件IO及目录操作
//================================================================================


/**
 * 取得文件名
 * @param {string} filePath 文件路径
 * @param {boolean} containExt 是否包含后缀名
 * @returns  {string}
 */
function fnPath_fileName(filePath, containExt = false) {
    let result = JsaPath.fileName(filePath, containExt)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * IsAbs返回路径是否是一个绝对路径。
 * @param {string} filePath 文件路径
 * @returns   {boolean}
 */
function fnPath_isAbs(filePath) {
    let result = JsaPath.isAbs(filePath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 *  Abs函数返回path代表的绝对路径，如果path不是绝对路径，会加入当前工作目录以使之成为绝对路径。因为硬链接的存在，不能保证返回的绝对路径是唯一指向该地址的绝对路径。
 * @param {string} filePath
 * @returns   {string}
 */
function fnPath_abs(filePath) {
    let result = JsaPath.abs(filePath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Rel函数返回一个相对路径，将basepath和该路径用路径分隔符连起来的新路径在词法上等价于targpath。也就是说，Join(basepath, Rel(basepath, targpath))等价于targpath本身。
 * 如果成功执行，返回值总是相对于basepath的，即使basepath和targpath没有共享的路径元素。如果两个参数一个是相对路径而另一个是绝对路径，或者targpath无法表示为相对于basepath的路径，将返回错误。
 * @param {string} basepath 基础路径，前缀路径
 * @param {string} targpath 目标路径，包含前缀路径
 * @returns   {string}
 */
function fnPath_rel(basepath, targpath) {
    let result = JsaPath.rel(basepath, targpath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Split函数将路径从最后一个路径分隔符后面位置分隔为两个部分（dir和file）并返回。如果路径中没有路径分隔符，函数返回值dir会设为空字符串，file会设为path。两个返回值满足 path == dir+file。
 * @param {string} path
 * @returns {string[]}
 */
function fnPath_split(path) {
    let result = JsaPath.split(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 *  Join函数可以将任意数量的路径元素放入一个单一路径里，会根据需要添加路径分隔符。结果是经过简化的，所有的空字符串元素会被忽略。
 * @param {string} path 文件夹数组
 * @returns {string}
 */
function fnPath_join(...path) {
    let result = JsaPath.join(...path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * FromSlash函数将path中的斜杠（'/'）替换为路径分隔符并返回替换结果，多个斜杠会替换为多个路径分隔符。
 * @param {string} path
 * @returns  {string}
 */
function fnPath_fromSlash(path) {
    let result = JsaPath.fromSlash(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * ToSlash函数将path中的路径分隔符替换为斜杠（'/'）并返回替换结果，多个路径分隔符会替换为多个斜杠。
 * @param {string} path
 * @returns  {string}
 */
function fnPath_toSlash(path) {
    let result = JsaPath.toSlash(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 *  VolumeName函数返回最前面的卷名。如Windows系统里提供参数"C:\foo\bar"会返回"C:"；Unix/linux系统的"\\host\share\foo"会返回"\\host\share"；其他平台会返回""。
 * @param {string} path
 * @returns  {string}
 */
function fnPath_volumeName(path) {
    let result = JsaPath.volumeName(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Dir返回路径除去最后一个路径元素的部分，即该路径最后一个元素所在的目录。在使用Split去掉最后一个元素后，会简化路径并去掉末尾的斜杠。如果路径是空字符串，会返回"."；如果路径由1到多个路径分隔符后跟0到多个非路径分隔符字符组成，会返回单个路径分隔符；其他任何情况下都不会返回以路径分隔符结尾的路径。
 * @param {string} path
 * @returns  {string}
 */
function fnPath_dir(path) {
    let result = JsaPath.dir(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Base函数返回路径的最后一个元素。在提取元素前会求掉末尾的路径分隔符。如果路径是""，会返回"."；如果路径是只有一个斜杆构成，会返回单个路径分隔符。
 * @param {string} path
 * @returns  {string}
 */
function fnPath_base(path) {
    let result = JsaPath.base(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Ext函数返回path文件扩展名。返回值是路径最后一个路径元素的最后一个'.'起始的后缀（包括'.'）。如果该元素没有'.'会返回空字符串。
 * @param {string} filePath
 * @returns {string}
 */
function fnPath_ext(filePath) {
    let result = JsaPath.ext(filePath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * // Clean函数通过单纯的词法操作返回和path代表同一地址的最短路径。
 * // 它会不断的依次应用如下的规则，直到不能再进行任何处理：
 * // 1. 将连续的多个路径分隔符替换为单个路径分隔符
 * // 2. 剔除每一个.路径名元素（代表当前目录）
 * // 3. 剔除每一个路径内的..路径名元素（代表父目录）和它前面的非..路径名元素
 * // 4. 剔除开始一个根路径的..路径名元素，即将路径开始处的"/.."替换为"/"（假设路径分隔符是'/'）
 * // 返回的路径只有其代表一个根地址时才以路径分隔符结尾，如Unix的"/"或Windows的`C:\`。
 * // 如果处理的结果是空字符串，Clean会返回"."
 * @param {string} path
 * @returns  {string}
 */
function fnPath_clean(path) {
    let result = JsaPath.clean(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 判断文件是否存在
 * @param {string} pFilePath
 * @param {number} pType 1:file,2:path，默认为不分文件目录
 * @returns {boolean}
 */
function fnPath_exist(pFilePath, pType=0) {
    let result = JsaPath.exist(pFilePath, pType)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}
 
/**
 * 复制文件
 * @param {string} src 源文件
 * @param {string} dst 目标文件
 * @returns {boolean}
 */
function fnPath_copy(src, dst) {
    let result = JsaPath.copy(src, dst)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 复制目录
 * @param {string} src 源文件
 * @param {string} dst 目标文件
 * @returns {boolean}
 */
function fnPath_copyFolder(src, dst) {
    let result = JsaPath.copyFolder(src, dst)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}

/**
 * 创建文件夹,以/或\结束
 * @param {string} path
 * @returns {boolean}
 */
function fnPath_createFolder(path) {
    let result = JsaPath.createFolder(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得文件列表信息
 * @param {string} path 路径
 * @param {string} suffix 后缀名，为空默认为全部文件
 * @param {boolean} allSubdirect 是否包含子目录
 * @param {boolean} containDirect 返回结果是否包含路径
 * @returns {[]}
 */
function fnPath_getFiles(path, suffix="", allSubdirect=false, containDirect=false) {
    let result = JsaPath.getFiles(path, suffix, allSubdirect,containDirect)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 删除文件或空目录
 * @param {string} filepath
 * @returns {boolean}
 */
function fnPath_remove(filepath) {
    let result = JsaPath.remove(filepath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 删除目录及下面的全部内容
 * @param {string} path
 * @returns {boolean}
 */
function fnPath_removeAll(path) {
    let result = JsaPath.removeAll(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 重命名
 * @param {string} src 源文件
 * @param {string} dst 目标文件
 * @returns {*}
 */
function fnPath_rename(src, dst) {
    let result = JsaPath.rename(src, dst)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 返回路径最终路径，执行 JsaPath.toSlash(JsaPath.clean(path)) ,如：D:\xxx\aa.txt
 * @param path 路径
 * @returns {string}
 */
function fnPath_getPath(path) {
    let result = JsaPath.getPath(path)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 判断路径是否包含子路径,
 * @param path 路径
 * @param subPath 子路径
 * @returns {boolean}
 */
function fnPath_containSubPath(path,subPath) {
    let result = JsaPath.containSubPath(path,subPath)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
