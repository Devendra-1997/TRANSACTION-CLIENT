import { Col, Row, Stack } from "react-bootstrap";
import SignupForm from "../../components/signupForm";
const SignupPage = () => {
  return (
    <Row className="d-flex align-items-center justify-content-center vh-100">
      <Col>
        <Stack className="shdaow-lg border rounded p-4">
          <h1>Join our App!!</h1>
          <p>Manage your income and expenses</p>
          <p>Track Your Finance</p>
        </Stack>
      </Col>

      <Col>
        <Stack className="shdaow-lg border rounded p-4">
          <h1>Sign Up</h1>
          <SignupForm />
        </Stack>
      </Col>
    </Row>
  );
};

export default SignupPage;
