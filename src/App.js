import AppStateProvider from "./providers/AppStateProvider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import useReduxState from "./hooks/useReduxState";
import useReduxDispatch from "./hooks/useReduxDispatch";

function App() {
  // const state = useReduxState();
  // const dispatch = useReduxDispatch();

  return (
    <AppStateProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/Checkout" component={Checkout} />
          <Route path="/" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </AppStateProvider>

    // <AppStateProvider>
    //   <Header />
    //   <div className="container">
    //     <Prototypes />
    //     <Orders />
    //     <Footer />
    //   </div>
    // </AppStateProvider>
  );
}

export default App;
