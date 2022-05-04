import classes from "./MainNavigation.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Link from "next/link";
import Image from "next/image";
import logopicture from "../img/Areion_Decal_Solid_1.png";
import { useRouter } from "next/dist/client/router";
import writelogo from "../img/Areion_Decal_Inverted_1.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../ReduxStore/slices/authSlice";
import { Redirect } from "next";

function MainNavigation() {
  const userIsLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const router = useRouter();

  const homePage = () => {
    router.push("/");
  };

  const logout = () => {
    dispatch(logoutHandler());
    router.push("/");
  };

  const login = () => {
    router.push("/login");
  };

  const logInOrOut = userIsLoggedIn ? (
    <button className={classes.btn} onClick={logout}>
      Logout
    </button>
  ) : (
    <button className={classes.btn} onClick={login}>
      Login
    </button>
  );

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Image
          onClick={homePage}
          src={writelogo}
          alt="areionBrakes inc logo"
          width={200}
          height={45}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/wishList">WishLists</Link>
          </li>
          <li>{userIsLoggedIn && <Link href="/profile">Account</Link>}</li>
          <li>{logInOrOut}</li>
          <span>
            <HeaderCartButton />
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
