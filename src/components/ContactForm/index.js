import React from 'react';
import { Form, Input, Button } from 'antd';

const ContactForm = () => {
  const onFinish = (values) => {
    console.log('Form submitted:', values);
  };

  return (
    <Form
      name="contact-form"
      onFinish={onFinish}
      layout="vertical"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[
          { required: true, message: 'Please enter your name' }
        ]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email address' },
          { type: 'email', message: 'Please enter a valid email address' }
        ]}
      >
        <Input placeholder="Enter your email address" />
      </Form.Item>
      <Form.Item
        label="Message"
        name="message"
        rules={[
          { required: true, message: 'Please enter your message' }
        ]}
      >
        <Input.TextArea placeholder="Enter your message" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;