import React from "react";

const routes = {
  key: "home",
  name: "Home",
  icon: "Home",
  path: "/",
  component: React.lazy(() => import("./pages/Dashboard")),
  children: [
    {
      key: "login",
      name: "Login",
      isPublic: true,
      isHidden: true,
      component: React.lazy(() => import("./pages/Login")),
    },
    {
      key: "profile",
      name: "Profile",
      isHidden: true,
    },
    {
      key: "Cash and Invoices",
      name: "Order",
      icon: "visualizeApp",
      children: [
        {
          key: "purchase-order",
          name: "Cash Receipts Entry/Post",
          component: React.lazy(() => import("./pages/PurchaseOrder")),
        },
        {
          key: "purchase-order2",
          name: "Wash Prepay Cash w/ Open Invoices",
          component: React.lazy(() => import("./pages/PurchaseOrder")),
        },
        {
          key: "sales-order",
          name: "Invoice/Adjustment Entry/Post",
        },
      ],
    },
    {
      key: "mangement",
      name: "System Management",
      icon: "managementApp",
      children: [
        {
          key: "organization",
          name: "EFT Workfile",
          icon: "Org",
        },
        {
          key: "user",
          name: "PNC EFT File Management",
          icon: "People",
        },
        {
          key: "authority",
          name: "Monthly Statments",
          icon: "SecurityGroup",
        },
        {
          key: "settings",
          name: "Settings",
          icon: "Settings",
          children: [
            {
              key: "list",
              name: "Credit",
            },
            {
              key: "unit",
              name: "Authorize",
            },
          ],
        },
      ],
    },
  ],
};

export default routes;
