import { BrowserRouter } from "react-router"
import MyRoutes from "./features/routes/MyRoutes"

const App = () => {

  return (
    <div>
      <BrowserRouter>
      <MyRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App