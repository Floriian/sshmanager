import { RouteObject } from "react-router-dom";
type BaseRoute = RouteObject & {
  name?: string;
  children?: Route[];
};

type RouteWithIcon = BaseRoute & {
  showOnDrawer: true;
  icon: React.ReactNode;
};

type RouteWithoutIcon = BaseRoute & {
  showOnDrawer?: false;
  icon?: never;
};

export type Route = RouteWithIcon | RouteWithoutIcon;
