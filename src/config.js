var domain = 'http://rap.taobao.org/mockjs/5758';

var urlMap = {
	summaryInfo:domain+'/DataApi/summaryInfo',//使用人群数量统计接口
	purchaseInfo:domain+'/DataApi/purchaseInfo',//购买情况数量统计接口
	wxfansInfo:domain+'/DataApi/wxfansInfo',//手机号是否注册数量统计接口
	summeryInfoTrends:domain+'/DataApi/summeryInfoTrends',//近30天用户资产数量统计接口（1/天）
	purchaseByYear:domain+'/DataApi/purchaseByYear',//按年份,渠道用户购买数量统计接口
	matchInfo:domain+'/DataApi/matchInfo',//整体匹配情况数量统计接口
	matchInfoTrends:domain+'/DataApi/matchInfoTrends',//近30天跨渠道id匹配数量统计接口（/天）
}

export default urlMap;