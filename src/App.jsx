import { Container } from "react-bootstrap";
import SignupPage from "./pages/user/signupPage";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container className="d-flex align-content">
      <SignupPage />
    </Container>
  );
}

export default App;
