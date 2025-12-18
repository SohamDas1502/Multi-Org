import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

export const CallbackPage = () => {
  const { error, isAuthenticated, isLoading } = useAuth0()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isLoading, isAuthenticated, navigate])

  if (error) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2>Authentication Error</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: 'white',
      fontSize: '1.2rem'
    }}>
      Completing authentication...
    </div>
  )
}
