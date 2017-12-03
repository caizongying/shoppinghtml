var caitou = new Array();

caitou.imde = "user";
caitou.check = function() {
	var time = 0;
	this.qwe = function() {
		return ++time;
	}
	caitou.check.prototype.qwer = function() {
		return ++time;
	}
	this.time = function() {
		return time;
	}
}
caitou.instance = new caitou.check();
caitou.replace = function() {
	var time = 100;
	this.time = function() {
		return time;
	}
}
caitou.replace.prototype = new caitou.check();
caitou.inv = new caitou.replace();

console.log(caitou.imde);

console.log(caitou.instance.qwe());

console.log(caitou.inv.qwe());

console.log(caitou.inv.qwe());

console.log(caitou.inv.time());