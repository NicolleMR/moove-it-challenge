import pushPin from "../../assets/images/push-pin.png";

const PostIt = () => (
  <div className="bg-yellow-300 max-w-280 h-280 shadow-2xl relative py-8	px-4">
    <img
      className="w-12 absolute right-2/4 translate-x-2/4 -top-2"
      src={pushPin}
      alt="Push Pin"
    />
    <h1>Moove It Post</h1>
    <button
      className="absolute bottom-0 left-0 bg-yellow-400	w-full	p-2.5	text-white font-bold text-xl hover:bg-yellow-500 transition-colors duration-300 tracking-widest"
      type="button"
    >
      Add
    </button>
  </div>
);

export default PostIt;
