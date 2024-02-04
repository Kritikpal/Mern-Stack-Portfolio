import { Button, Form } from "react-bootstrap";
import CustomFormInput from "./CustomFormInput";
import axios from "axios";
import HigherOrderSuspendedComponent from "../elements/HigherOrderSuspendedComponent";
import { useState } from "react";
import { SmallLoadingComponent } from "./LoadingComponent";
import { SmallErrorComponent } from "./ErrorComponent";
function ContactUsForm({ className }) {
  const [contactUser, setContactUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(contactUser);
    setFormIsSubmitting(true);
    setFormError(false);
    const response = axios.post("api/v1/sendEmail", contactUser);
    response
      .then((res) => {
        if (res.status === 200) {
          setFormSuccess(true);
          setFormIsSubmitting(false);
          setFormError(false);
        }
      })
      .catch((err) => {
        setFormIsSubmitting(false);
        setFormError(true);
        console.log(err);
      });
  };
  const handleInputChange = (field, value) => {
    setContactUser((prevUser) => ({
      ...prevUser,
      [field]: value,
    }));
  };
  return (
    <div className="my-card">
      <Form id="contact-form" onSubmit={(e) => handelSubmit(e)}>
        <CustomFormInput
          animationDelay={300}
          className="mb-3"
          type="text"
          name="email"
          value={contactUser.email}
          onChange={(e) => {
            handleInputChange("email", e.target.value);
          }}
          placeholder="Enter Your Email"
          label="Email"
          icon="fa fa-envelope"
        />
        <CustomFormInput
          animationDelay={600}
          icon="fa fa-user"
          className="mb-3"
          type="text"
          name="name"
          value={contactUser.name}
          onChange={(e) => {
            handleInputChange("name", e.target.value);
          }}
          placeholder="Enter Your Name"
          label="Name"
        />
        <CustomFormInput
          animationDelay={900}
          icon="fa fa-pencil"
          className="mb-3"
          type="text"
          name="subject"
          value={contactUser.subject}
          onChange={(e) => {
            handleInputChange("subject", e.target.value);
          }}
          placeholder="Enter Your Subject"
          label="Subject"
        />
        <CustomFormInput
          icon="fa fa-pencil"
          animationDelay={1200}
          className="mb-3"
          type="textarea"
          name="message"
          value={contactUser.message}
          onChange={(e) => {
            handleInputChange("message", e.target.value);
          }}
          placeholder="Enter Your Message"
          label="Message"
        />
        <Button
          variant={formError ? "danger" : formSuccess ? "success" : "primary"}
          disabled={formIsSubmitting || formSuccess}
          type="submit"
        >
          {formSuccess ? (
            <>
              <i className="fa fa-check"></i> Successfully Sent
            </>
          ) : (
            <HigherOrderSuspendedComponent
              isLoading={formIsSubmitting}
              error={formError}
              loadingComponent={
                <SmallLoadingComponent customMessage="Sending Email" />
              }
              errorComponent={
                <SmallErrorComponent customMessage="Error Sending Email" />
              }
            >
              Submit
            </HigherOrderSuspendedComponent>
          )}
        </Button>
      </Form>
    </div>
  );
}
export default ContactUsForm;
