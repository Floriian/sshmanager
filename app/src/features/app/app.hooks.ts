import { useAppDispatch, useAppSelector } from "@/app";
import { setActiveItem } from "@/features/app";
import { To, useNavigate } from "react-router-dom";

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const pathState = useAppSelector(
    (state) => state.app.navbar.selectedNavbarItem
  );

  const getActiveStatus = (path: string) => {
    return pathState === path;
  };

  const goto = (path: string) => {
    dispatch(setActiveItem(path));
    navigate(path as To);
    const active = getActiveStatus(path);
    return { active };
  };

  return { goto };
};
