import AppStateProvider from "./providers/AppStateProvider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Checkout from "./pages/Checkout";

import NotFound from "./pages/NotFound";

function App() {
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
