import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';

function App() {
  return (
    <div className="App">
      <FragmentDemo/>
      {/*<LifecycleA></LifecycleA>
      <Form/>
      <h1 className = 'error'>Error</h1>
      <h1 className = {styles.success}>Success</h1>
      <Inline></Inline>
      <Stylesheet primary = {true}></Stylesheet>
     
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>
      <FunctionClick/>
      <ClassClick/>
      <Counter/>
       <Message>
        
      </Message> 
      <Greet name='Harshit' heroName='Batman'/>
        
      
      <Hello/> 
      <Greet name = 'Priyansh' heroName='Supername'>
        <button>Action</button>
      </Greet>
      
      <Welcome name = 'Harshit' heroName='Batman'/> 
     
      <Welcome name = 'Priyansh' heroName='Superman'></Welcome>
             
     */}
    </div>
  );
}

export default App;
