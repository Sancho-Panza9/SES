import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Company",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Products & Services",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Market-specific Solutions",
    path: "/sign-in",
    element: <SignIn />,
  },

];

export default routes;
