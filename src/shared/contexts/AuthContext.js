import React, { useContext, createContext, useEffect, useState } from 'react'
import sdk from 'shared/sdk'
const authContext = createContext()

const useAuthContextProvider = () => {
  const [ user, setUser ] = useState()
  const [ isAuthenticating, setAuthenticating ] = useState(true)
  const [ isAuthenticated, setAuthenticated ] = useState(false)

  const login = (data) => {
    return sdk.auth.login(data)
      .then(result => {
        setUser(result.data)
        setAuthenticating(false)
        setAuthenticated(true)
        return Promise.resolve()
      })
      .catch(error => {
        console.log(error.response)
        setUser(state => ({
          ...state,
          meta: error.response
        }))
      })
  }

  return [
    user,
    {
      login
    }
  ]
}

const AuthContextProvider = ({...props}) => {
  const authInfo = useAuthContextProvider()
  return (
    <authContext.Provider value={authInfo} {...props} />
  )
}

const useContextAuth = () => useContext(authContext)

export {
  useContextAuth,
  AuthContextProvider
}