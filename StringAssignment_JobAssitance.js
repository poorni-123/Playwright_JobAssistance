// 1. print login and the opentaps string from the URL?
// http://leaftaps.com/opentaps/control/login

let urlname = "http://leaftaps.com/opentaps/control/login"
let splittedname = urlname.split('/')
console.log(splittedname[5],splittedname[3])

// 2. Change the string login to main in the given URL and launch using Playwright
// login -> main
// Original URL:
// http://leaftaps.com/crmsfa/control/login
// Target URL after replacement:
// http://leaftaps.com/crmsfa/control/main

let urlname1="http://leaftaps.com/crmsfa/control/login"
console.log(urlname1.replace("login","main"))