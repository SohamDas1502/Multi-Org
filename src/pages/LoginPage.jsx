import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './LoginPage.css'

export const LoginPage = () => {
  const { loginWithRedirect, isLoading } = useAuth0()

  const handleLogin = async () => {
        await loginWithRedirect()
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-header">
          <h1 className="login-title">Welcome to Multi-Org App</h1>
        </div>

        <button 
          onClick={handleLogin}
          className="btn-primary"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login with Auth0'}
        </button>
      </div>
    </div>
  )
}
