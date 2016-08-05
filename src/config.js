// var domain = 'http://rap.taobao.org/mockjs/5758';
var domain = 'http://211.151.68.29:8094';

var urlMap = {
	summaryInfo:domain+'/DataApi/getCount',//使用人群数量统计接口
	purchaseInfo:domain+'/DataApi/getUseCount',//购买情况数量统计接口
	wxfansInfo:domain+'/DataApi/getPhoneRegisterOrNoRegister',//手机号是否注册数量统计接口
	getUserAssetCount:domain+'/DataApi/getUserAssetCount',//近30天用户资产数量统计接口（1/天）
	getUserPurByYearAndChanel:domain+'/DataApi/getUserPurByYearAndChanel',//按年份,渠道用户购买数量统计接口
	getAllConditionCount:domain+'/DataApi/getAllConditionCount',//整体匹配情况数量统计接口
	getMatchCount:domain+'/DataApi/getMatchCount',//近30天跨渠道id匹配数量统计接口（/天）
}

export default urlMap;