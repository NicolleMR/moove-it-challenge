import PostIt from "../../components/PostIt/PostIt";
import Button from "../../components/Button";

const postsIt = [
  { id: 1, text: "Moove It", type: "show" },
  { id: 2, text: "Challenge", type: "show" },
  { id: 3, text: "Nicolle MR", type: "show" },
  { id: 4, text: "Hachiko", type: "show" },
  { id: 5, text: "Nalita", type: "show" },
];

const Home = () => {
  if (!postsIt?.length) {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-shadow mb-8 bg-[#F19336] p-4 text-center text-5xl font-bold text-white">
          You&apos;ve not created any note yet
        </h2>
        <Button className="bg-white py-1.5 px-[3.12rem] text-2xl text-[#C08C4A] hover:bg-transparent hover:text-white">
          Create It
        </Button>
      </div>
    );
  }
  return (
    <main className="grid grid-cols-auto-fill gap-5">
      {postsIt.map(({ id, text, type }) => (
        <PostIt key={id} text={text} type={type} />
      ))}
    </main>
  );
};

export default Home;
