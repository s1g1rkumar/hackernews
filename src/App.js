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
    return(
      <div className = "App">
        {helloworld}
        <h1>this is first page</h1>
        <h1>this is secound page</h1>
        <h1>this is third page</h1>
        <h1>this is fourth page</h1>
        <h1>this is five page</h1>
        <h1>this is six page</h1>
        <h1>this is seven page</h1>

        

      
       
      </div>
    );
  }

}   



export default App;
