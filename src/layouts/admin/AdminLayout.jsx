// import React from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import {
//   FileAddOutlined,
//   FileDoneOutlined,
//   FileOutlined,
//   UserAddOutlined,
//   UserOutlined,
// } from "@ant-design/icons";
// import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setUserInfoAction } from "store/actions/userAction";
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("User", "sub1", <UserOutlined />, [
//     getItem("User List", "1", <UserOutlined />),
//     getItem("Add user", "2", <UserAddOutlined />),
//   ]),
//   getItem("Movie", "sub2", <FileOutlined />, [
//     getItem("Movie List", "3", <FileDoneOutlined />),
//     getItem("Add movie", "4", <FileAddOutlined />),
//   ]),
// ];

// export default function AdminLayout() {
//   const userState = useSelector((state) => state.userReducer);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     localStorage.removeItem("USER_INFO_KEY");
//     dispatch(setUserInfoAction(null));
//     navigate("/");
//   };

//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div
//           style={{
//             height: 32,
//             margin: 16,
//             background: "rgba(255, 255, 255, 0.2)",
//           }}
//         />
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         ></Menu>
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "flex-end",
//             padding: "0px 15px",
//           }}
//         >
//           <Avatar
//             style={{
//               backgroundColor: "rgb(228 204 187)",
//               color: "rgb(206 141 131)",
//             }}
//             size="default"
//             icon={<UserOutlined />}
//           ></Avatar>
//           {userState.userInfo && (
//             <>
//               <span
//                 className="mr-3 ml-2 px-2"
//                 style={{
//                   border: "1px dashed #000",
//                   borderRadius: "5px",
//                   lineHeight: "32px",
//                 }}
//               >
//                 {userState.userInfo.hoTen}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-danger font-weight-bold rounded-pill border-0"
//               >
//                 LOGOUT
//               </button>
//             </>
//           )}
//         </Header>
//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: "16px 0",
//             }}
//           >
//             {/* <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
//           </Breadcrumb>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             <Outlet />
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// }

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FileAddOutlined,
  FileDoneOutlined,
  FileOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfoAction } from "store/actions/userAction";
import SidebarAdmin from "components/sidebar-admin/SidebarAdmin";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />, [
    getItem("User List", "1", <UserOutlined />),
    getItem("Add user", "2", <UserAddOutlined />),
  ]),
  getItem("Movie", "sub2", <FileOutlined />, [
    getItem("Movie List", "3", <FileDoneOutlined />),
    getItem("Add movie", "4", <FileAddOutlined />),
  ]),
];

export default function AdminLayout() {
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("USER_INFO_KEY");
    dispatch(setUserInfoAction(null));
    navigate("/");
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        {/* <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        ></Menu> */}
        <SidebarAdmin/>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0px 15px",
          }}
        >
          <Avatar
            style={{
              backgroundColor: "rgb(228 204 187)",
              color: "rgb(206 141 131)",
            }}
            size="default"
            icon={<UserOutlined />}
          ></Avatar>
          {userState.userInfo && (
            <>
              <span
                className="mr-3 ml-2 px-2"
                style={{
                  border: "1px dashed #000",
                  borderRadius: "5px",
                  lineHeight: "32px",
                }}
              >
                {userState.userInfo.hoTen}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-danger font-weight-bold rounded-pill border-0"
              >
                LOGOUT
              </button>
            </>
          )}
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}
