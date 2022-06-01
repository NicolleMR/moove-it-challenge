import { useState } from "react";
import PostIt from "../../components/PostIt/PostIt";
import ConfirmModal from "../../components/ConfirmModal";

const postsIt = [
  { id: 1, text: "Moove It", type: "trash" },
  { id: 2, text: "Challenge", type: "trash" },
  { id: 3, text: "Nicolle MR", type: "trash" },
  { id: 4, text: "Hachiko", type: "trash" },
  { id: 5, text: "Nalita", type: "trash" },
];

const Trash = () => {
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);
  if (!postsIt?.length) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-shadow mb-8 bg-[#F19336] p-4 text-center text-5xl font-bold text-white">
          You don&apos;t have any deleted notes yet
        </h2>
      </div>
    );
  }
  return (
    <main className="grid grid-cols-auto-fill gap-5">
      {postsIt.map(({ id, text, type }) => (
        <PostIt
          key={id}
          text={text}
          type={type}
          onRemoveFromTrash={() => {
            setIsTrashModalOpen(true);
          }}
        />
      ))}
      <ConfirmModal
        isModalOpen={isTrashModalOpen}
        closeModal={() => {
          setIsTrashModalOpen(false);
        }}
        title="Delete note from trash"
        description="Are you sure you want to delete this note from trash?"
        onConfirm={() => {}}
      />
    </main>
  );
};

export default Trash;
