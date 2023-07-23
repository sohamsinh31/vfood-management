import { Token } from "./Constant"

const username = localStorage.getItem("username" + Token)
const email = localStorage.getItem("useremail" + Token)
const userid = localStorage.getItem("userid" + Token)

export { username, userid, email }