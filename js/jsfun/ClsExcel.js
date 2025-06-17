//================================================================================ 
//说明：Excel操作
//================================================================================

class ClsExcel {

    /**
     * 构造函数 {string} excelFile参数有值表示打开Excel文件，否则表示新建Excel操作
     * @param {string} excelFile
     */
    constructor(excelFile=undefined) {
        this.excel = new JsaExcel(excelFile)
    }


    /**
     * 关闭文件
     * @returns {boolean}
     */
    exlClose() {
        let result = this.excel.close()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得工作薄名称
     * @param {number} sheetIndex 工作薄索引位置
     * @returns {string}
     */
    exlGetSheetName(sheetIndex) {
        let result = this.excel.getSheetName(sheetIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得工作薄名称数组
     * @returns {string[]}
     */
    exlGetSheetList() {
        let result = this.excel.getSheetList()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得工作薄索引位置
     * @param {string} sheetName
     * @returns {number}
     */
    exlGetSheetIndex(sheetName) {
        let result = this.excel.getSheetIndex(sheetName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得活动工作薄的索引位置
     * @returns {number}
     */
    exlGetActiveSheetIndex() {
        let result = this.excel.getActiveSheetIndex()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得激活工作薄的数据
     * @returns {[{}]}
     */
    exlGetData() {
        let result = this.excel.getData()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得指定工作薄的数据
     * @param {number} sheetIndex 工作薄索引位置，-1表示从工作薄名称确定需要读取的工作薄
     * @param {string} sheetName 工作薄名称
     * @returns { [{}]}
     */
    exlGetSheetData(sheetIndex, sheetName = undefined) {
        let result = this.excel.getSheetData(sheetIndex, sheetName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得指定列的数据
     * @param {string} sheetName 工作薄名称
     * @param {Object} Column {"标题":"title","价格":"price"}
     * @returns {[{}]}
     */
    exlGetDataWithCol(sheetName, Column) {
        let result = this.excel.getDataWithCol(sheetName, Column)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 导出Excel文件
     * @param {string} excelFile 导出的Excel文件路径
     * @returns {boolean}
     */
    exlSaveAs(excelFile) {
        let result = this.excel.saveAs(excelFile)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 批量设置当前工作薄数据
     * @param {Object} data 数据 [{"title":"AAAAA","price":123.12},{"title":"BBBBBB","price":1299}]
     * @param {Object} columns 列名映射 [{"cn":"title","title":"商品名称"},{"cn":"price","title":"价格"}]
     * @returns {boolean}
     */
    exlSetData(data, columns) {
        let result = this.excel.setData(data, columns)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增工作薄名称
     * @param {string} newSheetName 新工作薄名称
     * @returns {number}
     */
    exlNewSheet(sheetName) {
        let result = this.excel.newSheet(sheetName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 设置活动工作薄
     * @param {number} sheetIndex 工作薄索引
     * @returns {boolean}
     */
    exlSetActiveSheetIndex(sheetIndex) {
        let result = this.excel.setActiveSheetIndex(sheetIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 更改工作薄名称
     * @param {string} oldSheetName 旧工作薄名称
     * @param {string} newSheetName 新工作薄名称
     * @returns {boolean}
     */
    exlSetSheetName(oldSheetName, newSheetName) {
        let result = this.excel.setSheetName(oldSheetName, newSheetName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 设置工作薄单元格值
     * @param {string} sheetName 工作薄
     * @param {string} cellIndex 单元格索引
     * @param {string|number} value 值
     * @returns {boolean}
     */
    exlSetCellValue(sheetName, cellIndex, value) {
        let result = this.excel.setCellValue(sheetName, cellIndex, value)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增单元格样式
     * @returns {GoExcelCellStyle}
     */
    exlNewStyle() {
        let result = this.excel.newStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得单元格样式
     * @param {string}sheetName
     * @param {string}cellIndex 如:A1
     * @returns { GoExcelCellStyle}
     */
    exlGetCellStyle(sheetName, cellIndex) {
        let result = this.excel.getCellStyle(sheetName, cellIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得列样式
     * @param {string}sheetName
     * @param  {string}colIndex 列索引,如：A
     * @returns {GoExcelCellStyle}
     */
    exlGetColStyle(sheetName, colIndex) {
        let result = this.excel.getCellStyle(sheetName, colIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }




    /**
     * 设置单元格样式
     * @param {string} sheetName 工作薄
     * @param {string} topLeftCell 开始单元格位置
     * @param {string} bottomRightCell 结束单元格位置
     * @param {GoExcelCellStyle} styleOption
     * @returns { boolean}
     */
    exlSetCellStyle(sheetName, topLeftCell, bottomRightCell, styleOption) {
        let result = this.excel.setCellStyle(sheetName, topLeftCell, bottomRightCell, styleOption)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 设置列样式
     * @param {string} sheetName
     * @param {string} colName 列索引,如：A
     * @param {GoExcelCellStyle} styleOption
     * @returns {boolean}
     */
    exlSetColStyle(sheetName, colName, styleOption) {
        let result = this.excel.setColStyle(sheetName, colName, styleOption)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 合并单元格
     * @param {string} sheetName 工作薄
     * @param {string} topLeftCell 开始单元格位置
     * @param {string} bottomRightCell 结束单元格位置
     * @returns {boolean}
     */
    exlMergeCell(sheetName, topLeftCell, bottomRightCell) {
        let result = this.excel.mergeCell(sheetName, topLeftCell, bottomRightCell)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 移动工作薄到目标工作薄之前
     * @param {string}sheetName
     * @param {string}targetSheetName
     * @returns { boolean}
     */
    exlMoveSheet(sheetName, targetSheetName) {
        let result = this.excel.moveSheet(sheetName, targetSheetName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 添加下拉列表
     * @param {string} sheetName 工作薄
     * @param {string[]}dropDownListValue 如：["AAAAA","BBBBBB"]
     * @param {string} sqrefStart 如：A1
     * @param  {string}sqrefEnd 如：A1
     * @returns {boolean}
     */
    exlAddDropDownList(sheetName, dropDownListValue, sqrefStart,sqrefEnd="",hintMsg="",preventInput=false) {
        let result = this.excel.addDropDownList(sheetName, dropDownListValue, sqrefStart,sqrefEnd,hintMsg,preventInput)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


}

