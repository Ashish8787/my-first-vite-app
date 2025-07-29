import IntroCard from "./components/IntroCard";
import UserCard from "./components/UserCard";
import BlogCard from "./components/BlogCard";
import Counter from "./components/Counter";
import TimerComponent from "./components/TimeComponent";
import UserList from "./components/UserList";
import ThemeChanger from "./components/ThemeChanger";
import Wrapper from "./components/Wrapper";

const blogs = [
  {
    title: "Blog 1",
    author: "John Doe",
    date: "2021-01-01",
    summery: "This is a blog about React"
  },
  {
    title: "Blog 2",
    author: "Jane Doe",
    date: "2021-01-02",
    summery: "This is a blog about React"
  },
]
const stdDtails = [
{
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "123-456-7890"
},
{
  name: "Jane Doe",
  email: "jane.doe@example.com",
  phone: "123-456-7890"
},
]

function App() {
  return (
    <>
    {/* <TimerComponent /> */}
    {/* <Counter count={10} /> */}
    {/* <IntroCard /> */}
    {/* <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1 style={{ color: "red" , fontSize: "3rem", fontWeight: "bold" , marginBottom: "1rem" , textTransform: "uppercase" , letterSpacing: "0.2rem" , textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", textAlign: "center", alignItems: "center"}}>Hello React + Vite ⚡</h1>
      <p>Day 1: I just started learning React!</p>
    </div> */}
    {/* <UserCard name="John Doe" email="john.doe@example.com" phone="123-456-7890" />
    <UserCard name="Jane Doe" email="jane.doe@example.com" phone="123-456-7890" />
    <UserCard name="Jim Doe" email="jim.doe@example.com" phone="123-456-7890" /> */}

    {/* <BlogCard blogs={blogs} /> */}
    {/* <IntroCard stdDetails={stdDtails} /> */}
    {/* <UserList /> */}
    {/* <ThemeChanger /> */}
    <Wrapper>
      <h1>Hello World</h1>
    </Wrapper>
    <Wrapper>
      <h1>Hello Ashish</h1>
    </Wrapper>
    </>
  );
}

export default App;
