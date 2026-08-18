import Rail from './components/Rail.jsx';
import Greeting from './components/Greeting.jsx';
import Subjects from './components/Subjects.jsx';
import Quiet from './components/Quiet.jsx';
import Parents from './components/Parents.jsx';
import Progress from './components/Progress.jsx';
import Signup from './components/Signup.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Rail />
      <main className="app__main">
        <Greeting />
        <Subjects />
        <Quiet />
        <Parents />
        <Progress />
        <Signup />
        <Footer />
      </main>
    </div>
  );
}
