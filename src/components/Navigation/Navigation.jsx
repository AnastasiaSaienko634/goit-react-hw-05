import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";

export default function Navigation() {
  return (
    <>
      <div className={css.list}>
        <BiCameraMovie className={css.icons} />
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/movies">
          Movies
        </NavLink>
      </div>
    </>
  );
}
