import { useState } from "react";
import styled from "styled-components";
import { FlexContainer } from "../../components/FlexContainer";

const PageWrapper = styled(FlexContainer)`
  flex-direction: column;
  padding: 4rem 2rem;
  gap: 4rem;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.radius.xs};
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray300};
  border-radius: ${({ theme }) => theme.radius.xs};
  font-size: 1rem;
  height: 120px;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.lipstick};
  color: white;
  padding: ${({ theme }) => theme.spacing.sm};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <PageWrapper>
      <FlexContainer style={{ maxWidth: "800px" }}>
        <h1>About Us</h1>
        <span>
          At Éclat Atelier, we specialize in tailored treatments that enhance
          your natural beauty in a calm and welcoming atmosphere. Our dedicated
          team brings years of experience in hair, nails, skin, and holistic
          therapies.
        </span>
      </FlexContainer>

      <FlexContainer>
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.8924921133148!2d18.058382529243875!3d59.33474870018223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6739ec39f3%3A0xd045a0f8325fa2ce!2sKristall!5e0!3m2!1sen!2sse!4v1752148964777!5m2!1sen!2sse"
          style={{
            border: "0",
            maxWidth: "1080px",
            maxHeight: "800px",
            width: "100%",
            height: "400px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </FlexContainer>

      <FlexContainer>
        <h2>Contact Us</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            name="email"
            placeholder="Your Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>
      </FlexContainer>
    </PageWrapper>
  );
};

export default ContactUsPage;
