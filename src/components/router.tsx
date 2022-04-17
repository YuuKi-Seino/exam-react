import { Link } from "react-router-dom";

export default function AppRouters() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/hololive">HololiveTalent</Link>|{""}
      <Link to="/firstroot"> FirstRoot</Link>|{""}
      <Link to="/secondroot">SecondRoot </Link>|{""}
    </nav>
  );
}
