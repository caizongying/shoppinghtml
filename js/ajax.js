$(document).ready(function() {
	$("#footer-newsletter-button").click(function() {
		var a=$.ajax({
			type: "POST",
			data: "email="+escape($('#footer-newsletter-input').val()),
			url: "http://localhost:8090/email",
			success: function() {
				alert("订购成功");
			},
			error: function(error) {
				alert("订购失败");
			}
		})
        alert(window.location.href);
	});
});