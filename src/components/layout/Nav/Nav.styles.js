import { AnimationClassNames, getFocusStyle } from "office-ui-fabric-react";

const navFontSize = 14;
const navTextColor = "#FFF";
const navWidth = 280;
const navCollapsedWidth = 48;
const shortenedIconWidth = 32;
const navFloatingWidth = 230;
const navItemHeight = 48;
const navChildItemHeight = 32;
const navGroupSeparatorItemHeight = 40;
const navGroupSeparatorWithGroupNameHeight = 70;
const navItemIndentSize = 50;
const navFloatingItemIndentSize = 20;
const BackDropSelector =
  "@supports (backdrop-filter: blur(20px)) or (-webkit-backdrop-filter: blur(20px))";

export const getStyles = props => {
  const {
    isSelected,
    hasChildren,
    nestingLevel,
    isCollapsed,
    scrollTop,
    isChildLinkSelected,
    hasGroupName,
    theme
  } = props;
  return {
    root: {
      width: isCollapsed ? navCollapsedWidth : navWidth,
      height: '100vh',
      backgroundColor: theme.palette.neutralLight,
      color: navTextColor,
      selectors: {
        ul: {
          listStyleType: "none",
          padding: 0,
          margin: 0,
          fontSize: navFontSize,
          selectors: {
            "li:hover >div": {
              display: "block"
            }
          }
        },
        a: {
          color: `${navTextColor} !important`,
          outline: "none"
        }
      }
    },
    navItemRoot: {
      height:
        !!nestingLevel && nestingLevel > 0 ? navChildItemHeight : navItemHeight,
      cursor: "pointer",
      paddingLeft:
        !!nestingLevel && nestingLevel > 0
          ? nestingLevel * navItemIndentSize
          : "inherit",
      selectors: {
        ":hover": {
          backgroundColor: hasChildren
            ? theme.palette.neutralQuaternaryAlt
            : theme.palette.neutralQuaternary
        },
        ":active": {
          backgroundColor: theme.palette.neutralQuaternary
        }
      }
    },
    navItemBarMarker: {
      marginLeft:
        !!nestingLevel && nestingLevel > 0 && !hasChildren ? "-10px" : "6px",
      marginRight:
        !!nestingLevel && nestingLevel > 0 && !hasChildren ? "8px" : "0px",
      marginTop: !!nestingLevel && nestingLevel > 0 ? "7px" : "12px",
      width: "2px",
      height: !!nestingLevel && nestingLevel > 0 ? "18px" : "24px",
      backgroundColor: "#0078D4",
      display: isSelected || isChildLinkSelected ? "inline-block" : "none",
      borderWidth: 0
    },
    navItemIconColumn: {
      width:
        isSelected || isChildLinkSelected
          ? shortenedIconWidth
          : navCollapsedWidth,
      fontSize: "16px",
      lineHeight:
        !!nestingLevel && nestingLevel > 0 ? navChildItemHeight : navItemHeight,
      textAlign: "center",
      color: "#000000",
      verticalAlign: "top"
    },
    navItemNameColumn: {
      width: "100%",
      marginLeft:
        isChildLinkSelected ||
        (!hasChildren && isSelected && !(nestingLevel && nestingLevel > 0))
          ? "8px"
          : "0px",
      lineHeight:
        !!nestingLevel && nestingLevel > 0 ? navChildItemHeight : navItemHeight,
      verticalAlign: "top",
      display: "inline-block",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      color: "#000000"
    },
    navSlimItemRoot: {
      selectors: {
        ":hover": {
          backgroundColor: hasChildren
          ? theme.palette.neutralQuaternaryAlt
          : theme.palette.neutralQuaternary
        }
      }
    },
    navFloatingRoot: [
      {
        display: "none",
        zIndex: 1901,
        position: "absolute",
        marginLeft: navCollapsedWidth,
        marginTop:
          -navItemHeight - (!!scrollTop && scrollTop > 0 ? scrollTop : 0),
        width: navFloatingWidth,
        color: navTextColor,
        boxShadow:
          "0px 1.2px 3.6px rgba(0, 0, 0, 0.18), 0px 6.4px 14.4px rgba(0, 0, 0, 0.22)",
        backgroundColor: 'red',
        opacity: "0.6",
        selectors: {
          [BackDropSelector]: {
            webkitBackdropFilter: "blur(20px) saturate(125%)",
            backdropFilter: "blur(20px) saturate(125%)",
            backgroundColor: "rgba(255,255,255,.6)"
          },
          a: {
            width: "100%",
            backgroundColor: "inherit"
          }
        }
      },
      AnimationClassNames.slideRightIn20
    ],
    navFloatingItemRoot: {
      height:
        !!nestingLevel && nestingLevel > 0 ? navChildItemHeight : navItemHeight,
      cursor: "pointer",
      backgroundColor: !(nestingLevel && nestingLevel > 0)
       ? theme.palette.neutralQuaternaryAlt
            : theme.palette.neutralQuaternary,
      paddingLeft: navFloatingItemIndentSize,
      selectors: {
        ":hover": {
          backgroundColor:
            !!nestingLevel && nestingLevel > 0 ? theme.palette.neutralQuaternaryAlt : "unset"
        },
        ":active": {
          backgroundColor: theme.palette.neutralQuaternary
        }
      }
    },
    navGroupSeparatorRoot: {
      width: "100%",
      height: hasGroupName
        ? navGroupSeparatorWithGroupNameHeight
        : navGroupSeparatorItemHeight,
      textAlign: "center"
    },
    navGroupSeparatorHrLine: {
      position: "relative",
      height: "20px",
      borderBottom: `1px solid ${theme.palette.neutralQuaternaryAlt}`
    },
    navGroupSeparatorHeaderGroupName: {
      position: "absolute",
      marginTop: "40px",
      left: "16px",
      color: "#000000",
      fontWeight: "bold"
    },
    navToggler: {
      height: navItemHeight,
      cursor: "pointer",
      selectors: {
        ":hover": {
          backgroundColor: theme.palette.neutralQuaternaryAlt
        }
      },
      textAlign: "left"
    },
    focusedStyle: [
      getFocusStyle(
        theme,
        undefined,
        undefined,
        undefined,
        "transparent",
        undefined
      ),
      {
        display: "block",
        position: "relative",
        height:
          !!nestingLevel && nestingLevel > 0
            ? navChildItemHeight
            : navItemHeight,
        width: "100%",
        lineHeight:
          !!nestingLevel && nestingLevel > 0
            ? navChildItemHeight
            : navItemHeight
      }
    ]
  };
};
