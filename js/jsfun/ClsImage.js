//================================================================================
//说明：图片操作
//================================================================================

//================================================================================
//说明：图片操作
//================================================================================

class ClsImage {

    /**
     * 构造函数，生成画板 ,只有一个参数时为图片路径
     * @param {string|number}fileOrWidth  宽度/图片路径
     * @param {number} height 高度
     * @param colorStr 颜色值 为空默认为#FFFFFF
     */
    constructor(fileOrWidth, height=undefined, colorStr=undefined) {
        this.img = new JsaImage(fileOrWidth, height, colorStr)
    }


    /**
     * 清空画板,默认地板为白色
     * @param {string} colorStr 颜色值，为空默认为#FFFFFF
     * @returns { boolean}
     */
    imgClear(colorStr = "#FFFFFF") {
        let result = this.img.clear(colorStr)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 画线
     * @param {number} x1  起始点X轴
     * @param {number} y1 起始点X轴
     * @param {number} x2 起始点X轴
     * @param {number} y2 起始点X轴
     * @param {string} colorStr 颜色值
     * @param {number} lineWidth 线条宽度
     * @returns {  boolean}
     */
    imgDrawLine(x1, y1, x2, y2, colorStr = "#FFFFFF", lineWidth = 1) {
        let result = this.img.drawLine(x1, y1, x2, y2, colorStr, lineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 画矩形
     * @param {number} x 起始点X轴
     * @param {number} y 起始点Y轴
     * @param {number} w 矩形宽度
     * @param {number} h 矩形高度
     * @param {string} colorStr 颜色值
     * @param {number} lineWidth 等于0表示画实心矩形，大于0表示边框大小
     * @returns { boolean}
     */
    imgDrawRectangle(x, y, w, h, colorStr = "#FFFFFF", onlyDrayBorderLineWidth = 0) {
        let result = this.img.drawRectangle(x, y, w, h, colorStr, onlyDrayBorderLineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 画圆角矩形
     * @param {number} x 起始点X轴
     * @param {number} y 起始点Y轴
     * @param {number} w 矩形宽度
     * @param {number} h 矩形高度
     * @param {number} r 圆角半径
     * @param {string} colorStr 颜色值
     * @param {number} lineWidth 等于0表示画实心矩形，大于0表示边框大小
     * @returns { boolean}
     */
    imgDrawRoundedRectangle(x, y, w, h, r, colorStr = "#FFFFFF", onlyDrayBorderLineWidth = 0) {
        let result = this.img.drawRoundedRectangle(x, y, w, h, r, colorStr, onlyDrayBorderLineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 画圆
     * @param {number} x 圆心坐标X
     * @param {number} y 圆心坐标X
     * @param {number} r 圆半径
     * @param {string} colorStr 颜色值
     * @param {number} onlyDrayBorderLineWidth 等于0表示画实心矩形，大于0表示边框大小
     * @returns { boolean}
     */
    imgDrawCircle(x, y, r, colorStr = "#FFFFFF", onlyDrayBorderLineWidth = 0) {
        let result = this.img.drawCircle(x, y, r, colorStr, onlyDrayBorderLineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 椭圆
     * @param {number} x 圆心坐标X
     * @param {number} y 圆心坐标X
     * @param {number} rx X轴半径
     * @param {number} ry Y轴半径
     * @param {string} colorStr 颜色值
     * @param {number} onlyDrayBorderLineWidth 等于0表示画实心矩形，大于0表示边框大小
     * @returns {  boolean}
     */
    imgDrawEllipse(x, y, rx, ry, colorStr = "#FFFFFF", onlyDrayBorderLineWidth = 0) {
        let result = this.img.drawEllipse(x, y, rx, ry, colorStr, onlyDrayBorderLineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 规则多边形
     * @param {number} n 多边形具体数量
     * @param {number} x 圆心坐标X
     * @param {number} y 圆心坐标X
     * @param {number} r 圆半径
     * @param {number} rotation 旋转度数
     * @param {string} colorStr 颜色值
     * @param {number} onlyDrayBorderLineWidth 等于0表示画实心矩形，大于0表示边框大小
     * @returns {  boolean}
     */
    imgDrawRegularPolygon(n, x, y, r, rotation=0, colorStr = "#FFFFFF", onlyDrayBorderLineWidth = 0) {
        let result = this.img.drawRegularPolygon(n, x, y, r, rotation, colorStr, onlyDrayBorderLineWidth)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     *  画图片
     * @param {GoImage} image 图片资源
     * @param {number} x 起始点X轴
     * @param {number} y 起始点Y轴
     * @returns { boolean}
     */
    imgDrawImage(image, x, y) {
        let result = this.img.drawImage(image, x, y)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     * 写文字
     * @param {string} s 文本
     * @param {number} x 起始点X轴
     * @param {number} y 起始点Y轴
     * @param {number} ax 对齐X轴坐标 范围：0-1，居中：0.5
     * @param {number} ay 对齐Y轴坐标 范围：0-1，居中：0.5
     * @param {string} colorStr 颜色值
     * @param {string} fontFile 字体文件，必须提供字体,否则无法执行字体大小
     * @param {number} fontSize 字体大小
     * @returns {boolean}
     */
    imgDrawString(s, x, y, ax, ay, colorStr , fontFile , fontSize = 16) {
        let result = this.img.drawString(s, x, y, ax, ay, colorStr, fontFile, fontSize)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     * 绘制多行的字符串，自动换行需要有空格才会触发，后续会更更新
     * @param {string} s 文本
     * @param {number} x 起始点X轴
     * @param {number} y 起始点Y轴
     * @param {number} ax 对齐X轴坐标 范围：0-1，居中：0.5
     * @param {number} ay 对齐Y轴坐标 范围：0-1，居中：0.5
     * @param {number} width 宽度
     * @param {number} lineSpacing 行间距
     * @param {string} colorStr 颜色值
     * @param {string} fontFile 字体文件，中文必须提供字体，为空表示使用当前字体
     * @param {number} fontSize 字体大小
     * @param {string} align 对齐模式：left,center,right,默认为left
     * @returns { boolean}
     */
    imgDrawStringWrapped(s, x, y, ax, ay, width, lineSpacing, colorStr, fontSize , fontFile , align="left") {
        let result = this.img.drawStringWrapped(s, x, y, ax, ay, width, lineSpacing, colorStr, fontSize, fontFile, align)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     * 缩放
     * @param {number} scaleX 缩放X比例
     * @param {number} scaleY 缩放Y比例
     * @param {GoImage} image 图片资源
     * @param {number} drawX 画图X轴位置
     * @param {number} drawY 画图Y轴位置
     * @returns {boolean}
     */
    imgScale(scaleX, scaleY, image, drawX, drawY) {
        let result = this.img.scale(scaleX, scaleY, image, drawX, drawY)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 旋转
     * @param {number} angle 旋转角度
     * @param {GoImage} image 图片资源
     * @param {number} drawX 画图X轴位置
     * @param {number} drawY 画图Y轴位置
     * @returns {boolean}
     */
    imgRotate(angle, image, drawX, drawY) {
        let result = this.img.rotate(angle, image, drawX, drawY)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     * 倾斜
     * @param {number} x 倾斜X轴位置
     * @param {number} y 倾斜Y轴位置
     * @param {GoImage} image 图片资源
     * @param {number} drawX 画图X轴位置
     * @param {number} drawY 画图Y轴位置
     * @returns {boolean}
     */
    imgShear(x, y, image, drawX, drawY) {
        let result = this.img.shear(x, y, image, drawX, drawY)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


    /**
     * 取得image 从实例中取得image资源
     * @returns {{}}
     */
    imgImage() {
        let result = this.img.image()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 保存JPG图片,图片质量不佳，建议采用png保存
     * @param {string} imageFile 文件名
     * @param {number} quality 图片质量
     * @returns {boolean}
     */
    imgSaveJPG(imageFile, quality = 60) {
        let result = this.img.saveJPG(imageFile, quality)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }

    /**
     * 保存PNG图片
     * @param {string} imageFile 文件名
     * @returns {boolean}
     */
    imgSavePNG(imageFile) {
        let result = this.img.savePNG(imageFile)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data
    }


}



