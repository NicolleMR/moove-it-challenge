import { Link, useLocation } from "react-router-dom";
import Button from "../Button";
import Icon from "../Icon";

const Header = () => {
  const { pathname } = useLocation();
  const isTrashPage = pathname === "/trash";

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-[#C08C4A] shadow-md shadow-[#C08C4A]">
      {isTrashPage ? (
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-2.5 py-3.5">
          <Link to="/">
            <Icon color="white" name="arrow-left" title="Back to home" />
          </Link>
          <h1 className="text-shadow text-5xl font-bold text-white">Moove It Trash</h1>
          <Button className="mr-3.5">Empty trash</Button>
        </div>
      ) : (
        <div className="relative mx-auto flex max-w-screen-xl justify-end px-2.5 py-3.5">
          <h1 className="text-shadow absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-center text-5xl font-bold text-white">
            Moove It Notes
          </h1>
          <Button className="mr-3.5">New Post +</Button>
          <Link to="/trash">
            <Icon color="white" name="trash-empty" title="Trash" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
