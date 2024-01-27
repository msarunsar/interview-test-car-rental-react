import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Modal } from "antd";
import CustomBtn from "./CustomBtn";
import { CarProps } from "../../../interfaces/car";
import { CreateCar, UpdateCar } from "../../../services/car";

type FieldType = {
  name?: string;
  price?: string;
  discount?: string;
};

interface Props {
  car?: CarProps;
  title: string;
  isEdit?: boolean;
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
}

interface FieldData {
  name: string | number | (string | number)[];
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

const CustomModalCard: React.FC<Props> = (props: Props) => {
  const [form] = Form.useForm();
  const [fields, setFields] = useState<FieldData[]>();

  useEffect(() => {
    setFields([
      { name: ["name"], value: props.car?.name },
      { name: ["price"], value: props.car?.price },
      { name: ["discount"], value: props.car?.discount },
    ]);
  }, [props.car]);

  const onFinish = (values: any) => {
    if (props.isEdit){
      let data: CarProps = {
        id: props.car?.id || "",
        name: values.name,
        price: values.price,
        discount: values.discount
      }
      console.log("car_id", props.car?.id);
      UpdateCar(data).then((res)=>{
        console.log(res.data.code);
      }).catch((error)=>{
        console.error('Error fetching data:', error)
      })
    }else{
      let data: CarProps = {
        id: "",
        name: values.name,
        price: values.price,
        discount: values.discount
      }
      CreateCar(data).then((res)=>{
        console.log(res.data.code);
      }).catch((error)=>{
        console.error('Error fetching data:', error)
      })
    }
    form.resetFields();
    props.onOk()
  };

  const onFinishFailed = (errorInfo: any) => {
    form.resetFields();
    props.onCancel()
  };

  return (
    <Modal
      title={props.title}
      open={props.open}
      onOk={props.onOk}
      onCancel={props.onCancel}
      footer={[]}
    >
      <Form
        form={form}
        name="basic"
        layout="vertical"
        fields={fields}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        onFieldsChange={(_, allFields) => {
          setFields(allFields);
        }}
      >
        <Form.Item<FieldType> label="Name" name="name">
          <Input placeholder="Name" value={props.car?.name} />
        </Form.Item>

        <Form.Item<FieldType> label="Price" name="price" >
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Price"
            value={props.car?.price}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Discount" name="discount">
          <InputNumber
            style={{ width: "100%" }}
            placeholder="Discount"
            value={props.car?.discount}
          />
        </Form.Item>

        <Form.Item>
          <CustomBtn text={props.isEdit?"Update":"Add"} htmlType="submit" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomModalCard;
