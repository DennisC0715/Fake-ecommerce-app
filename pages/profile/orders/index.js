import { Fragment } from "react";
import UserPage from "../../../component/User/User";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Orderpage = () => {
  const router = useRouter();
  useEffect(() => {
    const initialToken = localStorage.getItem("token");
    if (!initialToken) {
      router.push("/login");
    }
  });

  return (
    <Fragment>
      <UserPage></UserPage>
      <h1>Order History</h1>
    </Fragment>
  );
};
export default Orderpage;
