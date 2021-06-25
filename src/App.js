
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Science from "./pages/SciencePage";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">NYT</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/arts">Arts</Nav.Link>
            <Nav.Link href="/world">World</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <br />
        <Switch>
          <Route path="/science">
            <Science />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
