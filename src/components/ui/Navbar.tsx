import { useContext } from "react";
import { UIContext } from "../../context";
import "./Navbar.css";

export const Navbar = () => {
  const { pageActive, changePage } = useContext(UIContext);

  return (
    <>
      <nav className="hacker__nav">
        <span className="hacker__nav-branding">Hacker News</span>
      </nav>

      <div className="hacker__section">
        <div
          className={`hacker__section-item ${
            pageActive === "all" ? "active" : ""
          }`}
          onClick={() => changePage("all")}
        >
          <span>All</span>
        </div>
        <div
          className={`hacker__section-item ${
            pageActive === "favs" ? "active" : ""
          }`}
          onClick={() => changePage("favs")}
        >
          <span>My faves</span>
        </div>
      </div>
    </>
  );
};
