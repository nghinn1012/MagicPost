import "./Sidebar.css";
import {
  SendToMobile,
  Home,
  PermIdentity,
  Storefront,
  WorkOutline,
  Laptop,
  Warehouse,
  Settings,
  BarChart,
  MenuRounded,
  WarehouseRounded,
  FactoryRounded,
  Inventory2Rounded,
  AccountBalanceRounded,
  AccountBalanceOutlined,
  AccessAlarmSharp,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import LogoutIcon from '../../assets/icons/logout.svg';
import * as actions from '../../store/actions';

export default function Sidebar() {
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleClickLogout = () => {
    localStorage.setItem('role', '');
    localStorage.setItem('id', '');
    localStorage.setItem('name', '');
    localStorage.setItem('transactionPointId', '')
    localStorage.setItem('warehouseId', '')
    dispatch(actions.logout())
    navigate('/');
    window.location.reload();
  };
  const handleItemClick = (key) => {
    // Store the active state in localStorage
    localStorage.setItem("activeKey", key);
    setIsActive(key);
  };

  const navList = [
    {
      role: "BOSS",
      name_role: "Lãnh đạo",
      navChild: [
        {
          icon: WarehouseRounded,
          title: "Kho hàng",
          link: "boss/warehouse",
          key: 1,
        },
        {
          icon: FactoryRounded,
          title: "Điểm giao dịch",
          link: "boss/transaction",
          key: 2,
        },
        {
          icon: Inventory2Rounded,
          title: "Đơn hàng",
          link: "boss/package",
          key: 3,
        },
        {
          icon: AccountBalanceRounded,
          title: "Tài khoản",
          link: "boss/account",
          key: 4,
        },
      ],
    },
    {
      role: "POINT_LEADER",
      name_role: "Trưởng điểm",
      navChild: [
        {
          icon: AccountBalanceRounded,
          title: "Giao dịch viên",
          link: "/pointLeader/account",
          key: 1,
        },
        {
          icon: Inventory2Rounded,
          title: "Hàng gửi",
          link: "/pointLeader/packageSending",
          key: 2,
        },
        {
          icon: Storefront,
          title: "Hàng nhận",
          link: "/pointLeader/packageReceivering",
          key: 3,
        },
      ],
    },
    {
      role: "POINT_STAFF",
      name_role: "Giao dịch viên",
      navChild: [
        {
          icon: Home,
          title: "Đơn chờ gửi đến kho",
          link: "/pointStaff/sendToWarehouse",
          key: 1,
        },
        {
          icon: Storefront,
          title: "Đơn chờ nhận từ kho",
          link: "/pointStaff/receiveFromWarehouse",
          key: 2,
        },
        {
          icon: AccessAlarmSharp,
          title: "Đơn gửi người nhận",
          link: "/pointStaff/sendToAccount",
          key: 3,
        },
        {
          icon: WorkOutline,
          title: "Đơn hoàn trả",
          link: "/pointStaff/refund",
          key: 4,
        },
        {
          icon: WorkOutline,
          title: "Đơn giao thành công",
          link: "/pointStaff/success",
          key: 5,
        }
      ],
    },
    {
      role: "WAREHOUSE_LEADER",
      name_role: "Trưởng kho",
      navChild: [
        {
          icon: AccountBalanceRounded,
          title: "Nhân viên",
          link: "/warehouseLeader/account",
          key: 1,
        },
        {
          icon: Inventory2Rounded,
          title: "Hàng đi",
          link: "/warehouseLeader/packageSending",
          key: 2,
        },
        {
          icon: Storefront,
          title: "Hàng đến",
          link: "/warehouseLeader/packageReceivering",
          key: 3,
        },
      ],
    },
    {
      role: "WAREHOUSE_STAFF",
      name_role: "Nhân viên kho",
      navChild: [
        {
          icon: Home,
          title: "Đơn chờ gửi đến kho",
          link: "/warehouseStaff/sendToWarehouse",
          key: 1,
        },
        {
          icon: Storefront,
          title: "Đơn chờ nhận từ kho",
          link: "/warehouseStaff/receiveFromWarehouse",
          key: 2,
        },
        {
          icon: AccessAlarmSharp,
          title: "Đơn chờ gửi đến DGD",
          link: "/warehouseStaff/sendToTransaction",
          key: 3,
        },
        {
          icon: WorkOutline,
          title: "Đơn chờ nhận từ DGD",
          link: "/warehouseStaff/receiveFromTransaction",
          key: 4,
        },
      ],
    }
  ];
  const [isActive, setIsActive] = useState(() => {
    const storedActiveKey = parseInt(localStorage.getItem('activeKey'));
    const isValidKey = navList.find((item) =>
      item.navChild.some((child) => child.key === storedActiveKey)
    );
    return isValidKey ? storedActiveKey : (navList[0]?.navChild[0]?.key || 1);
  });

  return (
    <nav className="sidebar">
      <div className="sidebarWrapper">
        {navList.map((item) =>
          localStorage.getItem('role') === item.role ? (
            <div className="sidebarMenu">
              <Link style={{ textDecoration: "none" }}>
                <h3 className="sidebarTitle">{item.name_role}</h3>
              </Link>
              <ul className="sidebarList">
                {item.navChild.map((child) => (
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={() => handleItemClick(child.key)}
                    to={child.link}
                    className="link"
                  >
                    <li
                      className={
                        isActive === child.key
                          ? "sidebarListItem active"
                          : "sidebarListItem"
                      }
                    >
                      <child.icon className="sidebarIcon" />
                      <h3 className="sidebarText">{child.title}</h3>
                      {/* {child.title} */}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : null
        )}
        <div className="sidebar-footer" onClick={handleClickLogout}>
          <span className="sidebar-item-label">Đăng xuất</span>
          <img
            src={LogoutIcon}
            alt="icon-logout"
            className="sidebar-item-icon"
          />
        </div>
      </div>
    </nav>
  );
}
