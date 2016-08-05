import reqwest from './reqwest.min';
import urlMap from './config';

var mhttp = function(o){
	var opt = {},
	uname = getCookie('mname'),
	token = getCookie('mtoken');
	if(!uname || !token){
		window.location.href = 'http://localhost:8080/login.html';
	}
	opt.success = function(res){
		if(res.flag==503){
			window.location.href = 'http://localhost:8080/login.html';
		}

		o.success(res)
	}
	opt.url = o.url;
	opt.error = o.error;
	opt.data = {
		'uname':uname,
		'token':token
	}
	reqwest(opt)
}

//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    var path = '/';
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+"; path=" + path ;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie  
function clearCookie(name) {  
    setCookie(name, "", -1);  
}  
function checkCookie() {
    var oScript = document.createElement('script');
    oScript.src = "http://dev.data.social-touch.com:30104/weixin/getcookie";
    document.body.appendChild(oScript);
}


export {mhttp,urlMap};