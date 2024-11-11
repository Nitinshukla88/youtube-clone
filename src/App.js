import Header from "./components/Header";
import Body from "./components/Body";
import store from "./utils/appStore";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
