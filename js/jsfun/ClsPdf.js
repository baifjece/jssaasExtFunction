//================================================================================
//说明：Pdf操作
//================================================================================

class ClsPdf {

    /**
     * 构造函数，初始化PDF(只能创建只读模式，或者写入模式），pdfFile存在默认为只读模式，否则为写入模式
     * @param {boolean} isPortrait pdf文件,本地文件或网络文件，只读模式
     */
    constructor(pdfFile = undefined) {
        this.pdf = new JsaPdf(pdfFile)
    }

    /**
     * 文本内容，每页为一个数组元素
     * @param pageIndex 页码，为0时，为全部文本
     * @returns {string[]}
     */
    pdfGetText(pageIndex = 0) {
        let result = this.pdf.getText(pageIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 解密
     * @param {string} password 密码
     * @returns { boolean}
     */
    pdfDecrypt(password) {
        let result = this.pdf.decrypt(password)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 总页数
     * @returns { number}
     */
    pdfPageCount() {
        let result = this.pdf.pageCount()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增一页
     * @returns {boolean}
     */
    pdfAddPage() {
        let result = this.pdf.addPage()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 保存pdf文件内容
     * @param fileName
     * @returns {boolean}
     */
    pdfSave(fileName) {
        let result = this.pdf.save(fileName)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 写入文本,文本太长，自动新增一页
     * @param txt
     * @param lineHeight 行高，默认为1.0
     * @param {GoPdfTextChunkStyle} options 文本样式
     * @returns {boolean}
     */
    pdfWrite(txt, lineHeight = 1.0, options = null) {
        let result = this.pdf.write(txt, lineHeight, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 创建段落，文本太长，即使换页也显示不完的内容会被隐藏，最后需要调用render()渲染
     * @param txt 文本内容
     * @param lineHeight 行高，默认为1.0
     * @param {GoPdfParagraphStyle} options 样式
     * @returns {GoPdfSingleParagraph}
     */
    pdfAddSingleParagraph(txt, lineHeight = 1.0, options = null) {
        let result = this.pdf.addSingleParagraph(txt, lineHeight, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 创建可扩展段落，最后需要调用render()渲染
     * @param lineHeight 行高，默认为1.0
     * @returns {GoPdfParagraph}
     */
    pdfCreateParagraph(lineHeight = 1.0) {
        let result = this.pdf.createParagraph(lineHeight)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 追加文本
     * @param paragraphId 段落ID
     * @param txt 文本内容
     * @param  {GoPdfTextChunkStyle} options 文本块样式
     * @returns {boolean}
     */
    pdfParagraphAppendText(paragraphId, txt, options = null) {
        let result = this.pdf.paragraphAppendText(paragraphId, txt, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 渲染
     * @param drawID
     * @returns {boolean}
     */
    pdfRender(drawID) {
        let result = this.pdf.render(drawID)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 前置页面渲染，只能渲染一次，以最后一次为准
     * @param drawID
     * @returns {boolean}
     */
    pdfFrontPageRender(drawID) {
        let result = this.pdf.frontPageRender(drawID)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 取得字体资源ID
     * @param fontFile
     * @returns {GoPdfFont}
     */
    pdfAddFontFile(fontFile) {
        let result = this.pdf.addFontFile(fontFile)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增文本样式实例
     * @returns {GoPdfTextStyle}
     */
    pdfNewTextStyle() {
        let result = this.pdf.newTextStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增章节样式实例
     * @returns {  GoPdfChapterStyle}
     */
    pdfNewChapterStyle() {
        let result = this.pdf.newChapterStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增文本块样式实例
     * @returns { GoPdfTextChunkStyle}
     */
    pdfNewTextChunkStyle() {
        let result = this.pdf.newTextChunkStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增表格样式实例
     * @returns {GoPdfTableStyle}
     */
    pdfNewTableStyle() {
        let result = this.pdf.newTableStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增表格单元格样式实例
     * @returns {GoPdfTableCellStyle}
     */
    pdfNewTableCellStyle() {
        let result = this.pdf.newTableCellStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增图片样式实例
     * @returns {GoPdfImageStyle}
     */
    pdfNewImageStyle() {
        let result = this.pdf.newImageStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 新增单一段落样式实例
     * @returns { GoPdfParagraphStyle}
     */
    pdfNewParagraphStyle() {
        let result = this.pdf.newParagraphStyle()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 取得图片资源ID，有坐标默认定位显示，无坐标默认流式显示，最后需要调用pdfRender()渲染
     * @param imageFile 图片文件
     * @param {GoPdfImageStyle} options 图片样式
     * @returns {GoPdfImage}
     */
    pdfAddImage(imageFile, options = null) {
        let result = this.pdf.addImage(imageFile, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 显示章节页
     * @param title 头部标题
     * @param {GoPdfTextStyle} optionsTitle 标题样式选项
     * @param {GoPdfTextStyle} optionsList 列表样式选项
     * @returns {*}
     */
    pdfShowTOC(title, optionsTitle = null, optionsList = null) {
        let result = this.pdf.showTOC(title, optionsTitle, optionsList)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 添加章节，需要调用pdfRender()渲染
     * @param title
     * @param {GoPdfChapterStyle} options 样式选项
     * @returns {*}
     */
    pdfAddChapter(title, options = null) {
        let result = this.pdf.addChapter(title, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 添加子章节，需要调用pdfRender()渲染
     * @param chapterId 章节ID
     * @param title  标题
     * @param {GoPdfChapterStyle} options 样式选项
     * @returns {*}
     */
    pdfAddSubChapter(chapterId, title, options = null) {
        let result = this.pdf.addSubChapter(chapterId, title, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 设置页面边距
     * @param left
     * @param top
     * @param right
     * @param bottom
     * @returns {*}
     */
    pdfSetPageMargins(left = 0, top = 0, right = 0, bottom = 0) {
        let result = this.pdf.setPageMargins(left, top, right, bottom)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 添加表格
     * @param colSpan 列数
     * @param  {GoPdfTableStyle} options 表格样式
     * @returns {GoPdfTable}
     */
    pdfAddTable(colSpan = 1, options = null) {
        let result = this.pdf.addTable(colSpan, options)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 添加表格单元格
     * @param tableId 表格ID
     * @param colSpan 列数
     * @param {GoPdfTableCellStyle} optionsCell 单元格样式
     * @param drawId 元素ID（段落ID、图片ID）
     * @returns {*}
     */
    pdfAddCell(tableId, colSpan = 1, optionsCell = {}, drawId = null) {
        let result = this.pdf.addCell(tableId, colSpan, optionsCell, drawId)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

}

