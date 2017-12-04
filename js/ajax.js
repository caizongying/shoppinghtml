$(document).ready(function() {
	$("#footer-newsletter-button").click(function() {
		var a=$.ajax({
            type: 'POST',
            data: "email="+$('#footer-newsletter-input').val(),
			url: "http://localhost:8090/email",
            dataType: 'json',
			success:function(data) {
				alert(data);
			},
			error: function(error) {
				alert(error);
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
            dataType: 'json',
			success:function(data){
            alert(data);
		},
		      error:function(data){
                  alert(data);
			  }});
    });

	$("#contact-submit").click(function(){
		var params={
            firstname:$("#billing_first_name").val(),
			lastname:$("#billing_last_name").val(),
            city:$("#billing_city").val(),
            email:$("#billing_email").val(),
            phone:$("#billing_phone").val(),
            username:$("#order_comments").val(),
		};
		var c=$.ajax({
			 type:"POST",
			 url:"http://localhost:8090/contact",
			data:params,
			dataType: 'json',
            success:function(data){
                alert(data);
            },
            error:function(data){
                alert(data);
            } });
	});
});