/*Write a JavaScript function that replaces in a HTML document given as string all the
 tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].*/

 function replaceHref(html) {
 	return html.replace(/<a href="/g, '[URL=').replace(/">/g, ']').replace(/<\/a>/g, '[/URL]');
 }

 var html = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
 console.log(replaceHref(html));