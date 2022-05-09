import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.scss"

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className={classes["container"]}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
