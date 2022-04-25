import classes from "./MainNavigation.module.css";
import HeaderCartButton from "./HeaderCartButton";
import Link from "next/link";
import Image from "next/image";
import logopicture from "../img/Areion_Decal_Solid_1.png";
import { useRouter } from "next/dist/client/router";

function MainNavigation() {
  const router = useRouter();

  const homePage = () => {
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo} >
        <Image
          onClick={homePage}
          src={logopicture}
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
            <Link href="/Login">Login</Link>
          </li>

          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/WishList">WishLists</Link>
          </li>
          <span>
            <HeaderCartButton />
          </span>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
