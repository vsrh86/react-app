import logo from './logo.svg';
import './App.css';
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
function App() {
  return (
    <div className="App">
     <h1>PROJECT K 2828</h1>
     <MyButton/>
     <AboutPage/>
    </div>
  );
}
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}



export default App;
