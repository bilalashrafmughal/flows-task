const iconsUrl = "/assets/sidebar-icons";

export const drawerSwitchButtonConfig = {
  id: 8,
  icon: `${iconsUrl}/bars.svg`,
  name: "",
};

export default [
  {
    id: 1,
    icon: `${iconsUrl}/dashboard.svg`,
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    icon: `${iconsUrl}/task.svg`,
    name: "Tasks",
    url: "/tasks",
  },
  {
    id: 3,
    icon: `${iconsUrl}/procedures.svg`,
    name: "Procedures",
    url: "/procedures",
  },
  {
    id: 4,
    icon: `${iconsUrl}/components.svg`,
    name: "Components",
    url: "/components",
  },
  {
    id: 5,
    icon: `${iconsUrl}/company.svg`,
    name: "Company",
    url: "/company",
  },
  {
    id: 6,
    icon: `${iconsUrl}/builder.svg`,
    name: "Builder",
    url: "/builder",
  },
  {
    id: 7,
    icon: `${iconsUrl}/roadmap.svg`,
    name: "Roadmap",
    url: "/roadmap",
  },
];
