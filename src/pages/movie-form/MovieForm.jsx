import React, { useEffect, useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  notification,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { addMovieApi, editMovieApi, fetchMovieDetailApi } from "services/movie";
import { GROUP_ID } from "constants";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import moment from "moment";

export default function MovieForm() {
  const [form] = useForm();
  const params = useParams();
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState();

  const [componentSize, setComponentSize] = useState("default");
  const navigate = useNavigate();

  useEffect(() => {
    // Trong t/h edit
    if (params.id) {
      getMovieDetail();
    }
  }, [params.id]);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);

    form.setFieldsValue({
      tenPhim: result.data.content.tenPhim,
      moTa: result.data.content.moTa,
      ngayKhoiChieu: moment(result.data.content.ngayKhoiChieu),
      trailer: result.data.content.trailer,
      sapChieu: result.data.content.sapChieu,
      dangChieu: result.data.content.dangChieu,
      hot: result.data.content.hot,
      danhGia: result.data.content.danhGia,
    });
    // console.log(result);
    setImagePreview(result.data.content.hinhAnh);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleFinish = async (values) => {
    values.ngayKhoiChieu = values.ngayKhoiChieu.format("DD/MM/YYYY");
    console.log(values);

    const formData = new FormData();
    formData.append("maNhom", GROUP_ID);
    formData.append("tenPhim", values.tenPhim);
    formData.append("moTa", values.moTa);
    formData.append("trailer", values.trailer);
    formData.append("ngayKhoiChieu", values.ngayKhoiChieu);
    formData.append("sapChieu", values.sapChieu);
    formData.append("dangChieu", values.dangChieu);
    formData.append("hot", values.hot);
    formData.append("danhGia", values.danhGia);
    file && formData.append("File", file, file.name);

    if (params.id) {
      formData.append("maPhim", params.id);
      await editMovieApi(formData);
    } else {
      await addMovieApi(formData);
    }

    notification.success({
      message: params.id ? "S???a phim th??nh c??ng" : "Th??m phim th??nh c??ng",
    });
    navigate("/admin/movie-management");
  };

  const handleFile = (event) => {
    // console.log(event);
    setFile(event.target.files[0]);

    // Chuy???n ?????i files[0] sang d???ng base64
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // ?????c file
    reader.onload = (event) => {
      // console.log(event.target.result);
      setImagePreview(event.target.result);
    };
  };

  return (
    <Form
      form={form}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        tenPhim: "",
        trailer: "",
        moTa: "",
        ngayKhoiChieu: "",
        sapChieu: true,
        dangChieu: true,
        hot: true,
        danhGia: 5,
      }}
      onFinish={handleFinish}
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
      <Form.Item
        label="T??n phim"
        name="tenPhim"
        rules={[
          { required: true, message: "T??n phim kh??ng ???????c ????? tr???ng" },
          // { min: 5, message: "T??n phim ph???i t??? 5 k?? t???" },
          // { max: 20, message: "T??n phim ph???i nh??? h??n ho???c b???ng 20 k?? t???" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Trailer" name="trailer">
        <Input />
      </Form.Item>
      <Form.Item label="M?? t???" name="moTa">
        <Input />
      </Form.Item>
      <Form.Item label="Ng??y kh???i chi???u" name="ngayKhoiChieu">
        <DatePicker />
      </Form.Item>
      <Form.Item label="??ang chi???u" valuePropName="checked" name="dangChieu">
        <Switch />
      </Form.Item>
      <Form.Item label="S???p chi???u" valuePropName="checked" name="sapChieu">
        <Switch />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked" name="hot">
        <Switch />
      </Form.Item>
      <Form.Item label="S??? sao" name="danhGia">
        <InputNumber />
      </Form.Item>
      <Form.Item label="H??nh ???nh">
        <Input type="file" onChange={handleFile} />
      </Form.Item>
      <Image src={imagePreview} />
      <Form.Item label="T??c v???">
      {params.id ? (
          <>
            <Button htmlType="submit">C???P NH???T</Button>
          </>
        ) : (
          <>
            <Button htmlType="submit">L??U</Button>
          </>
        )}
      </Form.Item>
    </Form>
  );
}
