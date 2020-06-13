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
import Tables from './components/Tables';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCountTwo from './components/HoverCountTwo';
import User from './components/User';
import CounterProps from './components/CounterProps';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value ="Ashmeet">
        <ComponentC />
      </UserProvider>
      {/*
      <CounterProps>
        {(count, incrementCount) => 
      (<ClickCounterTwo count = {count} incrementCount = {incrementCount} />
      )}
        </CounterProps>
      <CounterProps> 
        {(count, incrementCount) => 
      (<HoverCountTwo count = {count} incrementCount = {incrementCount} />
      )}
        </CounterProps>

      <ClickCounterTwo/>
      <HoverCountTwo/>
      <User render = { (isLoggedIn)  => isLoggedIn? 'Ashmeet' : 'Guest'}/>
      <ClickCounter name = 'Ashmeet' />
      <HoverCounter/>
      <ErrorBoundary>
      <Hero heroName="Batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker"/>
      </ErrorBoundary>
      <PortalDemo/>
      <FRParentInput/>
      <FocusInput/>
      <RefsDemo/>
      <ParentComp/>
      <Tables/>
      <FragmentDemo/>
      <LifecycleA></LifecycleA>
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
