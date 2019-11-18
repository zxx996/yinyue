function getReg(){
	var xhr=new XMLHttpRequest();
			
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			if(result==1)
				alert("注册成功");
			else
				alert("注册失败");
			}
		}
			
	var $uname=phone.value;
	var $upwd=upwd.value;
	var $upwd1=upwd1.value;
	var $phone=phone.value;
	var $yzm=yzm.value;
	
	if(!$uname){
		pe.value="手机号不能为空";
		return;
		}
	if(!$upwd){
		upd.value="密码不能为空";
		return;
	}
	if(!yzm){
		yz.value="验证码不能为空"
	}
	xhr.open("post","/pro/api/v1/register",true);		
	var formdata="uname="+$uname+"&upwd="+$upwd+"&email="+$email+"&phone="+$phone;
	xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xhr.send(formdata);

}

function checkUname(){
	var isReg=1;
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 && xhr.status==200){
			var result=xhr.responseText;
			if(result==0)
				qwe.innerHTML="用户名不可用";
		}
	}
	var $uname=uname.value;
	xhr.open("get","/pro/api/v1/isReg"+$uname,true);
	xhr.send();
			
}

	