import React from "react";
import { Form } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

function CustomFormInput({
  type = "text",
  name = "input",
  placeholder = "input",
  value = "",
  label = "",
  onChange = () => {},
  className = "",
  animationDelay = 0,
  animationTime = 1000,
  icon = "",
}) {
  const formAnimation = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    config: { duration: animationTime },
    delay: animationDelay,
  });
  return (
    <animated.div style={formAnimation}>
      <Form.Group className={`mb-3 ${className}`}>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <div className="d-flex align-items-center">
          <div className="me-2">
            <i className={icon} />
          </div>
          <Form.Control
            className="text-white border-0 border-bottom rounded-0"
            style={{
              // make it dark
              background: "rgb(37, 37, 50)",
              color: "white",
            }}
            id={name}
            type={type}
            as={type === "textarea" ? "textarea" : "input"}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required
          />
        </div>
      </Form.Group>
    </animated.div>
  );
}

export default CustomFormInput;
