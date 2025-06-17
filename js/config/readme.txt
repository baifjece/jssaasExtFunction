配置文件夹,文件命名必须为config_xxx.js
文件夹名称不能更改


调用说明：
config文件命名规则：config_xxx.js  为小写字符
文件结构：
var Config_config = {
    "cache": {"homecachetime": 3600},
    "token": {
        "md5salt": "xxxxxxxxx",
        "dessalt": "aaaaaaaaaaa"
    }
}

定义变量命名规则：Config_xxx

调用方式：
let dessalt = Config_config.token.dessalt;