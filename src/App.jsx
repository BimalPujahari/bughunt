import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalnotificationselector } from './Atom'
import { useEffect } from 'react'
import axios from 'axios'
function App() {
  return <div>
    <RecoilRoot>
      <Theapp/>
    </RecoilRoot>
  </div>
}
function Theapp() {
  const [navbar,setNavbar]=useRecoilState(notifications);
  const totalNotificationCount=useRecoilValue(totalnotificationselector);

useEffect(()=>{
  axios.get("https://sum-server.100xdevs.com/notification").then(res=>{
    setNavbar(res.data)
  })
},[])

  return (
    
    <div>
     <button>Home</button>
     <button>Network ({navbar.network})</button>
     <button>Jobs ({navbar.jobs})</button>
     <button>Messaging ({navbar.messaging})</button>
     <button>Notifications ({navbar.notification})</button>
     <button>Me ({totalNotificationCount})</button>
    </div>
  )
}
export default App