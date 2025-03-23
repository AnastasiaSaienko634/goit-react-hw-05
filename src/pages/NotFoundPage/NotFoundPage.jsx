import css from "./NotFoundPage.module.css";
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div>
        <p>
          404 Not found! Please folow this links{" "}
          <NavLink to="/" className={css.errorLink}>
            Click
          </NavLink>
        </p>
      </div>
    </>
  );
}
