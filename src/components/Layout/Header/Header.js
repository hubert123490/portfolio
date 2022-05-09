import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./Header.module.scss";
import Button from "../../UI/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [size.width, isMenuOpen]);

  const menuToggleHandler = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={classes["header"]}>
      <div className={classes["header__content"]}>
        <Link
          to="/"
          className={classes["header__content--logo"]}
          onClick={menuToggleHandler}
        >
          navbar
        </Link>

        <nav
          className={`${classes["header__content--nav"]} 
        ${isMenuOpen && size.width < 768 ? classes["isMenu"] : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={menuToggleHandler}>
                Page one
              </Link>
            </li>
            <li>
              <Link to="/a" onClick={menuToggleHandler}>
                Page two
              </Link>
            </li>
            <li>
              <Link to="/sd" onClick={menuToggleHandler}>
                Page three
              </Link>
            </li>
          </ul>
          <Button className={classes["button"]}>CTA Page</Button>
        </nav>
        <div className={classes["header__content--toggle"]}>
          {!isMenuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose
              className={classes["header__content--toggle__close"]}
              onClick={menuToggleHandler}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
