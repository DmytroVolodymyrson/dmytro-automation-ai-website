import { BrowserRouter } from "react-router-dom";
import AppProviders from "./AppProviders";
import AppRoutesClient from "./AppRoutesClient";

const App = () => (
  <AppProviders>
    <BrowserRouter>
      <AppRoutesClient />
    </BrowserRouter>
  </AppProviders>
);

export default App;
