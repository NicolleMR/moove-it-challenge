import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import PostItModal from "../PostItModal";
import ConfirmModal from "../ConfirmModal";

const Header = ({ setNotes, notes }) => {
  const { pathname } = useLocation();
  const isTrashPage = pathname === "/trash";
  const [isPostItModalOpen, setIsPostItModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const trashNotes = notes.filter(({ type }) => type === "trash");
  const trashNotesQuantity = trashNotes.length;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-[#C08C4A] shadow-md shadow-[#C08C4A]">
        {isTrashPage ? (
          <div className="mx-auto flex max-w-screen-xl items-center justify-around px-2.5 py-3.5 md:justify-between">
            <Link to="/">
              <Icon color="white" name="arrow-left" title="Back to home" />
            </Link>
            <h1 className="text-shadow text-2xl font-bold text-white md:text-5xl">
              Moove It Trash
            </h1>
            <Button
              onClick={() => {
                setIsConfirmModalOpen(true);
              }}
              className="mr-3.5"
            >
              Empty trash
            </Button>
          </div>
        ) : (
          <div className="relative mx-auto flex max-w-screen-xl justify-between px-2.5 py-3.5 md:justify-end">
            <h1 className="text-shadow text-2xl font-bold text-white md:absolute md:right-1/2 md:bottom-1/2 md:translate-x-1/2 md:translate-y-1/2 md:text-center md:text-5xl">
              Moove It Notes
            </h1>
            <div className="flex">
              <Button
                onClick={() => {
                  setIsPostItModalOpen(true);
                }}
                className="mr-3.5"
              >
                New Post +
              </Button>
              <Link to="/trash">
                <div className="relative">
                  <Icon
                    color="white"
                    name={trashNotesQuantity > 0 ? "trash" : "trash-empty"}
                    title="Trash"
                  />
                  {trashNotesQuantity > 0 && (
                    <div className="absolute top-0 right-0 flex h-3.5 w-3.5 items-center justify-center rounded-[50%] bg-red-600 text-white">
                      {trashNotesQuantity}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>
        )}
      </header>
      <PostItModal
        closeModal={() => {
          setIsPostItModalOpen(false);
        }}
        isModalOpen={isPostItModalOpen}
        setNotes={setNotes}
      />
      <ConfirmModal
        closeModal={() => {
          setIsConfirmModalOpen(false);
        }}
        isModalOpen={isConfirmModalOpen}
        title="Empty Trash"
        description="Are you sure you want to empty the trash?"
        onConfirm={() => {
          setNotes((currentNotes) => currentNotes.filter(({ type }) => type !== "trash"));
          setIsConfirmModalOpen(false);
        }}
      />
    </>
  );
};

Header.propTypes = {
  setNotes: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string.isRequired,
      type: PropTypes.oneOf(["edit", "show", "trash"]).isRequired,
    }),
  ).isRequired,
};

export default Header;
