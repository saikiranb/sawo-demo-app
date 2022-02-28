import React, { useEffect, useState } from 'react'
import Sawo from 'sawo'

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: 'sawo-container',
            // can be one of 'email' or 'phone_number_sms'
            identifierType: 'email',
            // Add the API key copied from 5th step
            apiKey: 'a113e707-7e98-4a6e-91b8-4956d0797a0b',
            // Add a callback here to handle the payload sent by sdk
            onSuccess: payload => {
                // you can use this payload for your purpose
                setIsLogin(true)
            },
        }
        let sawo = new Sawo(config)
        sawo.showForm()
    }, [])

    return (
        <div> 
            <div id="sawo-container" style={{height:"300px", width:"400px"}}></div>
        </div>
    )
}

export default Login