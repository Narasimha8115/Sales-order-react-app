import Form from "./pages";
import Invoice from "./pages/InvoiceTable";
import './pages/styles.css'
import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Form} />
        <Route path='/invoice' component={Invoice} />
      </Switch>
    </div>
  );
}

export default App;
