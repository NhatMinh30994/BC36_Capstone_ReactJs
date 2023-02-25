import React, { useEffect } from "react";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Select,
} from "antd";
import { useState } from "react";
import { fetchMovieDetailApi } from "services/movie";
import { useParams } from "react-router-dom";

export default function ShowtimeManagemen() {
  const [movieDetail, setMovieDetail] = useState({});
  const params = useParams();

  useEffect(() => {
    getMovieDetail();
  }, []);

  const getMovieDetail = async () => {
    const result = await fetchMovieDetailApi(params.id);
    setMovieDetail(result.data.content);
  };

  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <div className="row" style={{ display: "flex" }}>
      <div className="col-4" style={{ textAlign: "center" }}>
        <Image width={200} src={movieDetail.hinhAnh} />
      </div>
      <div className="col-8">
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
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          {/* <Form.Item label="Input">
            <Input />
          </Form.Item> */}
          <Form.Item label="Hệ thống rạp">
            <Select placeholder="Chọn hệ thống rạp">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Cụm rạp">
            <Select placeholder="Chọn cụm rạp">
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Ngày khởi chiếu">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Giá vé">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Chức năng">
            <Button>Tạo lịch chiếu</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
