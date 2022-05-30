import PostIt from "../../components/PostIt/PostIt";

const Home = () => (
  <main className="grid grid-cols-auto-fill gap-5">
    <PostIt text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit corporis saepe at quia, cumque quas, illo veritatis tenetur iusto molestiae deserunt cum quidem vel! Tenetur quia eligendi dolorum natus." />
    <PostIt text="Moove It" type="edit" />
    <PostIt text="Nicolle" type="trash" />
    <PostIt text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit corporis saepe at quia, cumque quas, illo veritatis tenetur iusto molestiae deserunt cum quidem vel! Tenetur quia eligendi dolorum natus." />
    <PostIt text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla impedit corporis saepe at quia, cumque quas, illo veritatis tenetur iusto molestiae deserunt cum quidem vel! Tenetur quia eligendi dolorum natus." />
  </main>
);

export default Home;
