import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  Input,
  Textarea,
} from "@material-tailwind/react";
import CONFIG from '../../config.json';
const {EMAIL} = CONFIG
export const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(EMAIL.SERVICE_ID, EMAIL.TEMPLATE_ID, form.current, EMAIL.PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" name="from_name" />
              <Input variant="standard" size="lg" label="Email Address" name="from_email" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} name="message"/>
            <Button  type = "submit" variant="gradient" size="lg" className="mt-8" >
              Send Message
            </Button>
          </form>
  );
};
