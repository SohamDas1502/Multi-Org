import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Dashboard.css'

export const Dashboard = () => {
  const { user, logout, getIdTokenClaims } = useAuth0()
  const [tokenClaims, setTokenClaims] = React.useState(null)

  React.useEffect(() => {
    const getClaims = async () => {
      const claims = await getIdTokenClaims()
      setTokenClaims(claims)
    }
    getClaims()
  }, [getIdTokenClaims])

  const organizationId = tokenClaims?.org_id
  const organizationName = tokenClaims?.org_name

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    })
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h2>Multi-Org App</h2>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </nav>

      <div className="dashboard-content">
        <div className="welcome-section">
          <h1>Welcome, {user.name || user.email}!</h1>
          <p className="subtitle">You're logged in and viewing your organization's dashboard</p>
        </div>

        <div className="cards-grid">
          <div className="info-card">
            <h3>User Information</h3>
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{user.name || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{user.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email Verified:</span>
              <span className="info-value">
                {user.email_verified ? '✓ Yes' : '✗ No'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">User ID:</span>
              <span className="info-value code">{user.sub}</span>
            </div>
          </div>

          <div className="info-card highlight">
            <h3>Organization Details</h3>
            {organizationId ? (
              <>
                <div className="info-item">
                  <span className="info-label">Organization ID:</span>
                  <span className="info-value code">{organizationId}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Organization Name:</span>
                  <span className="info-value">{organizationName || 'N/A'}</span>
                </div>
                <div className="org-badge">
                  ✓ Organization Member
                </div>
              </>
            ) : (
              <div className="no-org-message">
                <p>No organization associated with this login</p>
                <small>User logged in without organization context</small>
              </div>
            )}
          </div>

          <div className="info-card">
            <h3>Authentication Info</h3>
            <div className="info-item">
              <span className="info-label">Auth Method:</span>
              <span className="info-value">{user.sub?.split('|')[0] || 'N/A'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Last Updated:</span>
              <span className="info-value">
                {user.updated_at ? new Date(user.updated_at).toLocaleString() : 'N/A'}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Picture:</span>
              <div className="user-avatar">
                {user.picture && <img src={user.picture} alt="User avatar" />}
              </div>
            </div>
          </div>
        </div>

        <div className="token-section">
          <h3>ID Token Claims</h3>
          <div className="token-content">
            <pre>{JSON.stringify(tokenClaims, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
