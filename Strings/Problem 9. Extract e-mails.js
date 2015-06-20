/*Write a function for extracting all email addresses from given text.
All sub-strings that match the format @… should be recognized as emails.
Return the emails as array of strings.*/

function extractEmails(text) {
	return text.match(/[A-z0-9._]+@[A-z0-9]+.[A-z.]+/g);
}

var text = 'My email is kiki_riki@abv.bg and my friends email is fdsfssfd@yahoo.com';
console.log(extractEmails(text));