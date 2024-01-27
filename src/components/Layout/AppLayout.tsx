import React, { ReactElement } from "react";
import { Layout, Image } from "antd";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "left",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#fff",
  boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)" 
};

const contentStyle: React.CSSProperties = {
  marginTop: 15,
  padding: "0px 50px",
  paddingBottom: 50,
  minHeight: 120,
  color: "#000",
  backgroundColor: "#fff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "left",
  color: "#fff",
  backgroundColor: "#111827",
};

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <Layout>
      <Header style={headerStyle}>
        <Image
          preview={false}
          src="Logo.png"
        />
      </Header>
      <Content style={contentStyle}>{props.children}</Content>
      <Footer style={footerStyle}>
        <h4>Drivehub Co.,Ltd</h4>
        <p>193-195 Lake Rajada Office Complex,Ratchadapisek road, Khlong Toei, Bangkok</p>
        <p>© Drivehub 2024</p>
      </Footer>
    </Layout>
  );
};

export default AppLayout;
