import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-center bg-secondary p-2 ">
        <li className="nav-item">
          <Link className="nav-link text-dark" href="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" href="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" href="/contact">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" href="/signup">
            Sign Up
          </Link>
        </li>
        
      </ul>
    </>
  );
};

export default Navbar;
