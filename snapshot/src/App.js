import './App.css';
import React, {Component} from 'react'
import { HashRouter,Route ,Routes,Navigate} from 'react-router-dom';
import PhotoContextProvider from './context/PhotoContext';
import Header from './components/Header';
import Items from './components/Items';
import Search from './components/Search';
import NotFound from './components/NotFound';

// import {Redirect} from 'react-router-dom'



class App extends Component {

  handleSubmit =(e,history,searchInput)=>{
      e.preventDefault();
      e.currentTarget.reset();
      let url =`/search/${searchInput}`;
      history.push(url)
  }


  render(){
  return (
  
    <div className="App">
    
      <PhotoContextProvider>
        <HashRouter basename='/'>
            <div className='container'>
                <Route
                  render={props=>(
                    <Header
                      handleSubmit={this.handleSubmit}
                      history={props.history}
                    />
                  )}
                />
                <Routes>
                  <Route
                    exact
                    path="/"
                    render={()=><Navigate to="/mountain"/>}
                  />
                  
                  <Route
                    path="/mountain"
                    render={()=><Items searchTerm="mountain"/>}
                  />
                  <Route path="/beach" render={()=><Items searchTerm="beach"/>}/>
                  <Route path="/bird" render={()=><Items searchTerm="bird"/>}/>
                  <Route path="/food" render={()=><Items searchTerm="food"/>}/>
                  <Route
                    path="/search/:searchInput"
                    render={props=>(
                      <Search searchTerm={props.match.params.searchInput}/>
                    )}
                  />
                  <Route component={NotFound}/>
                </Routes>
            </div>
        </HashRouter>
      </PhotoContextProvider>
    </div>
  );
  }
}

export default App;
