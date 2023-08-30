import Header from "./Header";
import Button from "./lib/components/Button";
import Input from "./lib/components/Input";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
     

  <main className="px-3">
    <h1>Hello Dribble</h1>
    <p className="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
  </main>

  <footer className="mt-auto text-white-50">
    <p>Placeholder</p>
      </footer>
      <form>
        <label for="fname">First Name</label>
        <Input type={'text'} id="fname" name="fname" placeholder="First Name" />
        <label for="lname">Last Name</label>
        <Input type={'text'} id="fname" name="lname" placeholder="Last Name" />
        <label for="lname">Password</label>
        <Input type={'text'} id="fname" name="lname" placeholder="Password" />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}
