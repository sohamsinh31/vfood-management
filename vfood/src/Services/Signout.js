import React from 'react'
import { Token } from './Constant'

const Signout = () => {
    localStorage.removeItem("username" + Token)
    localStorage.removeItem("useremail" + Token)
    localStorage.removeItem("userid" + Token)
    window.location.href = "/"
    return (
        <div>

        </div>
    )
}

export default Signout
