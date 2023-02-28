import React from "react";
import { Button, Form, Input, Radio, Select } from "antd";
import { useState } from "react";

export default function UserForm() {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        hoTen: "",
        taiKhoan: "",
        matKhau: "",
        email: "",
        soDt: "",
        maLoaiNguoiDung: "",
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Họ tên" name="hoTen">
        <Input />
      </Form.Item>
      <Form.Item label="Tài khoản" name="taiKhoan">
        <Input />
      </Form.Item>
      <Form.Item label="Mật khẩu" name="matKhau">
        <Input />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="soDT">
        <Input />
      </Form.Item>
      <Form.Item label="Loại người dùng" name="maLoaiNguoiDung">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Tác vụ">
        <Button htmlType="submit">LƯU</Button>
      </Form.Item>
    </Form>
  );
}
