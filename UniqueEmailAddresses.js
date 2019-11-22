/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let actuallEmails = [];
    for (let i = 0; emails.length > i; i++) {
        let chars = emails[i].split("@");
        let localName = chars[0].split("");
        localName = localName.filter(item => item !== ".");
        if(localName.includes('+')) {
            let idx = localName.indexOf("+");
            localName.splice(idx, localName.length - idx);}
        let locanNameStr = localName.join("");
        let email = [];
        email.push(locanNameStr);
        email.push("@");
        email.push(chars[1]);
        let emailStr = email.join("");
        if (!actuallEmails.includes(emailStr)) {
            actuallEmails.push(emailStr);
        }
    }
    // console.log(actuallEmails.length)
    return actuallEmails.length
};

numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]);
