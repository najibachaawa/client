const data = [
  {
    id: "gogo",
    icon: "iconsminds-user",
    label: "Users Management",
    to: "/app/gogo",
    subs: [
      {
        icon: "iconsminds-add",
        label: "Add User",
        to: "/app/gogo/add"
      },
      {
        icon: "simple-icon-trash",
        label: "Delete User",
        to: "/app/gogo/delete"
      }

    ]
  },
  {
    id: "secondmenu",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.second-menu",
    to: "/app/second-menu",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.second",
        to: "/app/second-menu/second"
      }
    ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-bucket",
    label: "menu.blank-page",
    to: "/app/blank-page"
  }
];
export default data;
