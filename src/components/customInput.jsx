import { Form } from "react-bootstrap";
const CustomInput = (props) => {
  const { label, inputAttributes } = props;

  return (
    <Form.Group className="mb-4">
      <Form.Label className="fw-bold"> {label}</Form.Label>
      <Form.Control {...inputAttributes} />
    </Form.Group>
  );
};
export default CustomInput;
