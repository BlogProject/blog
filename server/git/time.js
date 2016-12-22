//格式化日期

var DataFormat =function(Data,fmt){
    var o = {
        "M+": Data.getMonth() + 1, //月份 
        "d+": Data.getDate(), //日 
        "h+": Data.getHours(), //小时 
        "m+": Data.getMinutes(), //分 
        "s+": Data.getSeconds(), //秒 
        "q+": Math.floor((Data.getMonth() + 3) / 3), //季度 
        "S": Data.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (Data.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};



var DatefromStr = function(Str){
    //'yyyy-MM-dd h:m:s'
    //var regx1 = /\d{4}-\d{1,2}-\d{1,2} \d{1,2}:\d{1,2}/;
    return  new Date(Str.replace(/-/g,'/'));
};


//console.log(DatefromStr('2015-10-16 17:01'));

exports = module.exports = DatefromStr;
exports.DataFormat = DataFormat;
