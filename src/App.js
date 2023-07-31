import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import { Outlet } from 'react-router-dom';
import { getUserToken } from './Auth/authLocalStorage';
import { validateUser } from './Api/api';

function App() {
  const [userToken, setUserToken] = useState(null)
  const [refreshToken, setRefreshToken] = useState(false)
  const [user, setUser] = useState(null)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    const token = getUserToken()

    setUserToken(token)

  }, [refreshToken])

  useEffect(() => {
    const verifyUser = async () => {
      const verifyResult = await validateUser(userToken)
      if (verifyResult.success) {
        setUser(verifyResult.email)
        setIsVerified(true)
      } else {
        setIsVerified(false)
        setUser(null)
      }
    }
    if (userToken) verifyUser()
  }, [userToken])

  return (
    <div className="App">
      <Navbar user={user} isVerified={isVerified} setRefreshToken={setRefreshToken} setUser={setUser} setIsVerified={setIsVerified} />
      <Outlet context={{ setRefreshToken, isVerified, userToken }} />
    </div>
  );
}

export default App;
