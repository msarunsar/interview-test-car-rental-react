import { Flex, List } from "antd";
import React, { useEffect, useState } from "react";
import AppLayout from "../../components/Layout/AppLayout";
import CustomBtn from "./components/CustomBtn";
import CustomCard from "./components/CustomCard";
import CustomModalCard from "./components/CustomModal";
import { CarProps } from "../../interfaces/car";
import { GetCarList } from "../../services/car";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectCar, setSelectCar] = useState<CarProps>();
  const [modalTitle, setModalTitle] = useState("Add Car");
  const [data, setData] = useState<CarProps[]>();
  const [isEdit, setIsEdit] = useState(false);

  const showModalAddCar = () => {
    setIsModalOpen(true);
    setModalTitle("Add Car");
    setSelectCar(undefined);
    setIsEdit(false);
  };

  const showModalEditCar = (value: CarProps) => {
    setIsModalOpen(true);
    setModalTitle("Edit Car");
    setSelectCar(value);
    setIsEdit(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    GetCarList()
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, [isModalOpen]);

  return (
    <>
      <AppLayout>
        <div style={{marginBottom:10}}>
          <h2>Car</h2>
          <CustomBtn text="Add Car" onClick={showModalAddCar} />
        </div>
        <List
          style={{marginBottom:50}}
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ border: "none" }}>
              <Flex vertical gap="small" style={{ width: "100%" }}>
                <CustomCard
                  carName={item.name}
                  price={item.price}
                  discount={item.discount}
                  onClick={() => showModalEditCar(item)}
                />
              </Flex>
            </List.Item>
          )}
        />
      </AppLayout>

      <CustomModalCard
        car={selectCar}
        title={modalTitle}
        open={isModalOpen}
        isEdit={isEdit}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </>
  );
};

export default Home;
