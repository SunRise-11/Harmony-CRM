import { useEffect, useState } from "react";
import { Switch, Tabs, Tree } from "antd";
import InlineSVG from "react-inlinesvg";
import { useSelector, useDispatch } from "react-redux";

import {
  setTheme,
  setDirection,
  setLocalStorageValue,
} from "../../../../redux/store";
import avatarImg from "../../../../assets/avatars/avatar.png";
import logoutIcon from "../../../../assets/icons/menu/logout.svg";
import settingIcon from "../../../../assets/icons/menu/setting.svg";

import homeIcon from "../../../../assets/icons/master/home.svg";
import usersIcon from "../../../../assets/icons/master/users.svg";
import pieIcon from "../../../../assets/icons/master/pie.svg";
import ClipboardCheckIcon from "../../../../assets/icons/master/clipboard-check.svg";
import CalendarIcon from "../../../../assets/icons/master/calendar.svg";
import CreateIcon from "../../../../assets/icons/master/create.svg";
import bagIcon from "../../../../assets/icons/master/bag.svg";
import targetIcon from "../../../../assets/icons/master/target.svg";
import presentationIcon from "../../../../assets/icons/master/presentation.svg";
import warningIcon from "../../../../assets/icons/master/warning.svg";
import passportIcon from "../../../../assets/icons/master/passport.svg";
import medicalIcon from "../../../../assets/icons/master/medical.svg";
import attachmentIcon from "../../../../assets/icons/master/attachment.svg";
import dateIcon from "../../../../assets/icons/master/date.svg";
import educationIcon from "../../../../assets/icons/master/education.svg";
import fileIcon from "../../../../assets/icons/master/file.svg";

const { TabPane } = Tabs;

const Theme = ({ showChangeTheme, setShowChangeTheme }) => {
  const dispatch = useDispatch();
  const direction = useSelector((state) => state.app.direction);
  const themes = ["original", "suggested", "monday", "dynamics"];
  const [selectedMenuKeys, setSelectedMenuKeys] = useState([]);
  const [checkedMenuKeys, setCheckedMenuKeys] = useState([]);
  const [selectedTabKeys, setSelectedTabKeys] = useState([]);
  const [checkedTabKeys, setCheckedTabKeys] = useState([]);

  const colors = [
    [
      "#16BFD6",
      "#0096EB",
      "#4A9ECD",
      "#5FBCFF",
      "#B3E3E3",
      "#D3EDF6",
      "#8AD341",
      "#E5D3B0",
      "#FFAB48",
      "#FF7979",
      "#F765A3",
      "#A155B9",
      "#FFFFFF",
      "#EAF0F2",
      "#344449",
      "#000000",
    ],
    [
      "#70C6DD",
      "#79AE94",
      "#ABD1BC",
      "#EEAE70",
      "#FFFFFF",
      "#EFEFEF",
      "#271E31",
    ],
    [
      "#599BFC",
      "#01C875",
      "#FECB02",
      "#FDAC35",
      "#FE58C4",
      "#E0445A",
      "#A35CDE",
      "#FFFFFF",
      "#4C4B50",
      "#271E31",
    ],
    [
      "#3499DB",
      "#2ECC72",
      "#F1C60E",
      "#E77D24",
      "#CC3C74",
      "#FFFFFF",
      "#3E5766",
      "#271E31",
    ],
  ];

  const menuTree = [
    {
      title: "דף הבית",
      icon: (
        <InlineSVG
          src={homeIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
      key: "0",
    },
    {
      title: "מקבלי שירות",
      key: "1",
      icon: (
        <InlineSVG
          src={usersIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      title: "דוחות",
      key: "2",
      icon: (
        <InlineSVG
          src={pieIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
      children: [
        {
          title: "דוח אירועים",
          key: "20",
        },
        {
          title: "דוח חוסרים",
          key: "21",
        },
        {
          title: "דוח הוצאות",
          key: "22",
        },
        {
          title: 'דו"ח ק"מ',
          key: "23",
        },
        {
          title: "סטטיסטיקת היסטוריות",
          key: "24",
        },
      ],
    },
    {
      title: "משימות",
      key: "3",
      icon: (
        <InlineSVG
          src={ClipboardCheckIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      title: "יומן פגישות",
      key: "4",
      icon: (
        <InlineSVG
          src={CalendarIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      title: "דיווחים",
      key: "5",
      icon: (
        <InlineSVG
          src={CreateIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
      children: [
        {
          title: "דיווח נוכחות",
          key: "50",
        },
        {
          title: "דיווח הוצאות",
          key: "51",
        },
        {
          title: "דיווח תעסוקה",
          key: "52",
        },
      ],
    },
    {
      title: "הזדמנויות תעסוקה",
      key: "6",
      icon: (
        <InlineSVG
          src={bagIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      title: "CRM",
      key: "7",
      icon: (
        <InlineSVG
          src={targetIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
      children: [
        {
          title: "מבקשי שירות פוטנציאליים",
          key: "70",
        },
        {
          title: "לקוחות פוטנציאליים",
          key: "71",
        },
      ],
    },
    {
      title: "הדרכות",
      key: "8",
      icon: (
        <InlineSVG
          src={presentationIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      title: "התראות",
      key: "9",
      icon: (
        <InlineSVG
          src={warningIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
  ];

  const tabTree = [
    {
      key: "1",
      title: "דף הבית",
      icon: (
        <InlineSVG
          src={homeIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "2",
      title: "פרופיל",
      icon: (
        <InlineSVG
          src={passportIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "3",
      title: "תיק רפואי",
      icon: (
        <InlineSVG
          src={medicalIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "4",
      title: "מסמכים",
      icon: (
        <InlineSVG
          src={attachmentIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "5",
      title: "אירועים",
      icon: (
        <InlineSVG
          src={dateIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "6",
      title: "יומן פגישות",
      icon: (
        <InlineSVG
          src={CalendarIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "7",
      title: "משימות",
      icon: (
        <InlineSVG
          src={ClipboardCheckIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "8",
      title: "לימודים",
      icon: (
        <InlineSVG
          src={educationIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "9",
      title: "תעסוקה",
      icon: (
        <InlineSVG
          src={bagIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
    {
      key: "10",
      title: "שאלונים",
      icon: (
        <InlineSVG
          src={fileIcon}
          width={16}
          height={16}
          style={{
            marginTop: "4px",
            marginRight: direction == "ltr" ? "5px" : "0px",
            marginLeft: direction == "rtl" ? "5px" : "0px",
          }}
        />
      ),
    },
  ];

  const findParentKey = (key, nodes) => {
    for (let node of nodes) {
      if (node.children) {
        for (let child of node.children) {
          if (child.key === key) {
            return node.key; // return the parent key
          }
          const subChildParent = findParentKey(key, node.children);
          if (subChildParent) return subChildParent;
        }
      }
    }
    return null;
  };

  const onCheckMenu = (checkedKey) => {
    setCheckedMenuKeys(checkedKey);
    localStorage.setItem("menuFilter", checkedKey);
  };

  const onSelectMenu = (selectedKey, info) => {
    setSelectedMenuKeys(selectedKey);
    setCheckedMenuKeys((prevKeys) => {
      if (!prevKeys.includes(info.node.key)) {
        // checked
        prevKeys.push(info.node.key);
        if (info.node.children) {
          info.node.children.map((item) => {
            prevKeys.push(item.key);
          });
        } else {
          const parentKey = findParentKey(info.node.key, menuTree);
          if (parentKey) {
            if (
              menuTree
                .filter((node) => node.key == parentKey)[0]
                .children.every((child) => prevKeys.includes(child.key))
            ) {
              prevKeys.push(parentKey);
            }
          }
        }
      } else {
        // unchecked
        prevKeys = prevKeys.filter((item) => item != info.node.key);
        if (info.node.children) {
          info.node.children.map((item) => {
            prevKeys = prevKeys.filter((key) => key != item.key);
          });
        }
        const parentKey = findParentKey(info.node.key, menuTree);
        if (parentKey) {
          prevKeys = prevKeys.filter((item) => item != parentKey);
        }
      }
      localStorage.setItem("menuFilter", prevKeys);
      return prevKeys;
    });
  };

  const onCheckTab = (checkedKey) => {
    setCheckedTabKeys(checkedKey);
    localStorage.setItem("tabFilter", checkedKey);
  };

  const onSelectTab = (selectedKey, info) => {
    setSelectedTabKeys(selectedKey);
    // Toggle the checked state of the selected node
    setCheckedTabKeys((prevKeys) => {
      const keyIndex = prevKeys.indexOf(info.node.key);
      if (keyIndex > -1) {
        // Key exists, remove it (uncheck)
        prevKeys = prevKeys.filter((key) => key !== info.node.key);
      } else {
        // Key doesn't exist, add it (check)
        prevKeys.push(info.node.key);
      }
      localStorage.setItem("tabFilter", prevKeys);
      return prevKeys;
    });
  };

  const updateLocalStorageValue = () => {
    const menuFilter = localStorage.getItem("menuFilter");
    const tabFilter = localStorage.getItem("tabFilter");
    dispatch(
      setLocalStorageValue({ menuFilter: menuFilter, tabFilter: tabFilter })
    );
  };

  useEffect(() => {
    updateLocalStorageValue();
  }, [checkedMenuKeys, checkedTabKeys, selectedMenuKeys, selectedTabKeys]);

  useEffect(() => {
    let menuTemp = [];
    if (localStorage.getItem("menuFilter") == null) {
      menuTree.map((item) => {
        menuTemp.push(item.key);
        if (item.children) {
          item.children.map((childItem) => {
            menuTemp.push(childItem.key);
          });
        }
      });
    } else {
      menuTemp = localStorage.getItem("menuFilter").split(",");
    }
    setCheckedMenuKeys(menuTemp);
    setSelectedMenuKeys(menuTemp);

    let tabTemp = [];
    if (localStorage.getItem("tabFilter") == null) {
      tabTree.map((item) => {
        tabTemp.push(item.key);
        if (item.children) {
          item.children.map((childItem) => {
            tabTemp.push(childItem.key);
          });
        }
      });
    } else {
      tabTemp = localStorage.getItem("tabFilter").split(",");
    }
    setCheckedTabKeys(tabTemp);
    setSelectedTabKeys(tabTemp);
  }, []);

  return (
    <div>
      <div className="header-theme-button">
        <a onClick={() => setShowChangeTheme(true)}>
          <InlineSVG src={settingIcon} />
        </a>
        <a>
          <img src={avatarImg} width={44} height={44} />
        </a>
        <a>
          <InlineSVG src={logoutIcon} />
        </a>
      </div>
      <div
        className="header-theme-modal"
        style={{
          display: showChangeTheme ? "block" : "none",
        }}
      >
        <Tabs type="card">
          <TabPane
            tab={
              <span
                style={{
                  fontSize: "11px",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                }}
              >
                צבעי תצוגה
              </span>
            }
            key="1"
          >
            <div className="header-theme-modal-main">
              <div className="header-theme-modal-main-board">
                {colors.map((themeColors, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setShowChangeTheme(false);
                      dispatch(setTheme(themes[index]));
                    }}
                    className="header-theme-modal-main-board-theme"
                  >
                    <div className="header-theme-modal-main-board-theme-bar">
                      {themeColors.reverse().map((color, index) => (
                        <div
                          key={index}
                          className="header-theme-modal-main-board-theme-bar-color"
                          style={{
                            background: color,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
                <div className="header-theme-modal-main-title">
                  <Switch
                    onChange={(checked) =>
                      dispatch(setDirection(checked ? "rtl" : "ltr"))
                    }
                    checkedChildren="rtl"
                    unCheckedChildren="ltr"
                    checked={direction === "rtl"}
                  />
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <span
                style={{
                  fontSize: "11px",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                }}
              >
                מסכים ראשיים
              </span>
            }
            key="2"
          >
            <div className="header-theme-modal-main">
              <div
                className="header-theme-modal-main-board"
                style={{
                  paddingTop: "12px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  overflow: "auto",
                  height: "239px",
                  marginBottom: "10px",
                }}
              >
                <Tree
                  checkable
                  showIcon
                  checkedKeys={checkedMenuKeys}
                  selectedKeys={selectedMenuKeys}
                  treeData={menuTree}
                  onCheck={onCheckMenu}
                  onSelect={onSelectMenu}
                  style={{ width: "208px", textWrap: "wrap" }}
                />
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={
              <center
                style={{
                  fontSize: "11px",
                  marginLeft: "-5px",
                  marginRight: "-5px",
                  width: "105px",
                  textWrap: "wrap",
                }}
              >
                מסכי מקבלי שירות
              </center>
            }
            key="3"
          >
            <div className="header-theme-modal-main">
              <div
                className="header-theme-modal-main-board"
                style={{
                  paddingTop: "12px",
                  paddingRight: "12px",
                  paddingLeft: "12px",
                  overflow: "auto",
                  height: "239px",
                  marginBottom: "10px",
                }}
              >
                <Tree
                  checkable
                  showIcon
                  checkedKeys={checkedTabKeys}
                  selectedKeys={selectedTabKeys}
                  treeData={tabTree}
                  onCheck={onCheckTab}
                  onSelect={onSelectTab}
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Theme;
