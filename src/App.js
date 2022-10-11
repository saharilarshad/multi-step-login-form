import { useState } from "react"
import Auth from "./pages/Auth"
import Home from "./pages/Home"


const App = () => {
  const [auth, setAuth] = useState({open:false, form:'login'})
  return (
    <div>
      <Home auth={auth} setAuth={setAuth} />
      <Auth auth={auth} setAuth={setAuth} />
    </div>
  )
}

export default App