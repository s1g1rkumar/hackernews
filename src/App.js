import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';


// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }
class App extends Component{
  render() {
    var helloworld = 'welcome';
    var page1 = '<h1>this is secund page</h1>';
    var page2 = '<h1>this is third page</h1>';
    var page3 = '<h1>this is fourth page</h1>';
    var page4 = '<h1>this is fiveth page</h1>';
    var page5 = '<h1>this is six page</h1>';
    var page6 = '<h1>this is seven page</h1>';


    return(
      <div className = "App">
        {helloworld}
        <h1>this is first page</h1>
        {page1}
             <h2>tesing ... for marging project</h2>
            
        {page2}

        {page3}

        {page4}

        {page5}
        {page6}




      </div>
    );
  }

}   



export default App;
