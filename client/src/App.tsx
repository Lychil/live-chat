import { Provider } from "react-redux"
import { GlobalStyles } from "./common/styles/GlobalStyles"
import RoutesProvider from "./routes/RoutesProvider"
import { store } from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <GlobalStyles />
      <RoutesProvider />
    </Provider>
  )
}

export default App
