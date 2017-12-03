$(document).ready(function() {
	$("#footer-newsletter-button").click(function() {
		var a=$.ajax({
            type: 'POST',
            data: "email="+$('#footer-newsletter-input').val(),
            dataType: 'json',
			url: "http://localhost:8090/email",
			success: function() {
				alert("订购成功");
			},
			error: function(error) {
				alert("订购失败");
			}
		})
		alert("234");
	});

	$("#login-submit").click(function () {
		var params={
		      username:$("#billing_username").val(),
			  password:$("#billing_password").val()
		};
		var b=$.ajax({
            type: 'POST',
			  data:params,
			  url:"http://localhost:8090/login",
			  dataType:'json',
			success:function(data){
            alert("登录成功");
		},
		      error:function(data){
                  alert("登录失败");
			  }});
    });


});