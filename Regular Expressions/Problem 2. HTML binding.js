/*Write a function that puts the value of an object into the content/attributes of HTML tags.
Add the function to the String.prototype*/

String.prototype.bind = function (object) {
	var html = this.toString();
	var dataBinds = html.match(/data-bind-[A-z]+="[A-z0-9]+"/g);
	for(var bind in dataBinds){
		bindAttr = dataBinds[bind].match(/[A-z]+=/g)[0].replace('=', '');
		bindValue = dataBinds[bind].match(/"[A-z0-9]+/g)[0].replace('"', '');
		if(bindAttr == 'content'){
			var content = '>' + object[bindValue] + '<';
			html = html.replace('><', content);
		}else{
			var attr = ' ' + bindAttr + '="' + object[bindValue] + '">';
			html = html.replace('>', attr);
		}
	}
	return html;
}

var str = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></а>'
console.log(str.bind({name: 'Elena', link: 'http://telerikacademy.com'}));   