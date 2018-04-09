import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Titlebar from './Components/titlebar';
import Header from './Components/header';
import CategoryButton from './Components/categoryButton';
import ModalInterview from './Components/modalInterview';
import ModalLevel from './Components/modalLevel';
import ModalToeic from './Components/modalToeic';
import Footer from './Components/footer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
                <Titlebar />
                <Header />
                <CategoryButton />
                <ModalInterview />
                <ModalLevel />
                <ModalToeic />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col" style={{margin: 16}}>

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
