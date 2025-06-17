//===============================================================================
//说明：
//================================================================================


/**
 * 渲染
 * @param {string} templateContent 模板内容
 * @param {*} pData 数据
 * @returns {string}
 */
function fnTemplate_render(templateContent,data) {
   let result=JsaTemplate.render(templateContent,data)
    if(result.code<0){
        throw(result.msg)
    }
    return result.data;
}

