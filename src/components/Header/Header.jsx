import Button from "../Button";
import Icon from "../Icon";

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-10 bg-[#C08C4A] shadow-md shadow-[#C08C4A]">
    <div className="relative mx-auto flex max-w-screen-xl justify-end px-2.5 py-3.5">
      <h1 className=" text-shadow absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-center text-5xl font-bold text-white">
        Moove It Notes
      </h1>
      <Button className="mr-3.5 hover:bg-white hover:text-[#C08C4A]">New Post +</Button>
      <button type="button" onClick={() => {}}>
        <Icon color="white" name="trash-empty" title="Trash" />
      </button>
    </div>
  </header>
);

export default Header;
