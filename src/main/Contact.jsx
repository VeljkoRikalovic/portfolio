import styled from "styled-components";
import { StyledDiv, StyledH3 } from "../styles/Styles";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 2rem;
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px;
  outline: 0;
  border: 0px;
  border-bottom: 3px solid var(--accent);
  border-radius: 5px;
  background-color: transparent;
  &:focus {
    border-top: 3px solid var(--accent);
  }
`;

const Message = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 20px;
  outline: 0;
  border: 0px;
  border-bottom: 2px solid var(--accent);
  border-radius: 5px;
  background-color: transparent;
`;

const Button = styled.button`
  width: 50%;
  background-color: var(--secondary);
  align-self: center;
  border: outset;
`;

function Contact() {
  const { t } = useTranslation();
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    !data.name || !data.email || !data.number || !data.message
      ? toast.error(t("toastError"))
      : emailjs
          .send(
            "service_b5p8sjk",
            "template_lisyqr4",
            {
              from_fullName: data.name,
              from_email: data.email,
              from_number: data.number,
              message: data.message,
            },
            { publicKey: "pllTiw--irvb-BwZi" }
          )
          .then(
            () => {
              toast.success(t("toastSuccess"));
            },
            () => {
              toast.error(t("toastErrorOne"));
            }
          );
    setData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  }

  return (
    <StyledDiv id="contact">
      <StyledH3>{t("contactMe")}</StyledH3>
      <Form onSubmit={handleSubmit}>
        <Div>
          <label>
            <Input
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required=""
              placeholder={t("contactName")}
              type="text"
            />
          </label>
        </Div>

        <label>
          <Input
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required=""
            placeholder={t("contactEmail")}
            type="email"
          />
        </label>

        <label>
          <Input
            value={data.number}
            onChange={(e) => setData({ ...data, number: e.target.value })}
            required=""
            type="tel"
            placeholder={t("contactNumber")}
          />
        </label>
        <label>
          <Message
            value={data.message}
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required=""
            rows="3"
            placeholder={t("contactMessage")}
          ></Message>
        </label>

        <Button>{t("contactSend")}</Button>
      </Form>
    </StyledDiv>
  );
}

export default Contact;
