import { Button, Card, Col, Row, Space, Typography, Image } from "antd";
import React from "react";

interface Props {
  carName: string;
  price: number;
  discount: number;
  onClick?: () => void;
}

const CustomCard: React.FC<Props> = (props: Props) => {

  const formatNumber = (value: number) => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <Card>
      <Row>
        <Col span={12}>
          <Space direction="vertical" size={16}>
            <Typography.Text>{props.carName}</Typography.Text>
            <Space size={16}>
              <Typography.Text delete={props.discount > 0}>{formatNumber(props.price)} THB</Typography.Text>
              {props.discount > 0 && (
                <Typography.Text style={{color:"red"}}>
                  {formatNumber(props.price - props.discount)} THB
                </Typography.Text>
              )}
            </Space>
          </Space>
        </Col>
        <Col span={6}></Col>
        <Col span={6} style={{textAlign:"right"}}>
          <Button
            icon={<img src="Button Square.png" alt="Custom Icon" />}
            type="text"
            onClick={props.onClick}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default CustomCard;
