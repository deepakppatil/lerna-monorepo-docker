import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Mfa2Page = React.lazy(() => import("app_mfa2/Mfa2Page"));
const Mfa1Page = React.lazy(() => import("app_mfa1/Mfa1Page"));

export function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Mfa2</Link>
            </li>
            <li>
              <Link to="/mfa1">Mfa1</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/mfa1">
              <React.Suspense fallback="loading">
                <Mfa1Page />
              </React.Suspense>
            </Route>
            <Route path="/">
              <React.Suspense fallback="loading">
                <Mfa2Page />
              </React.Suspense>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
