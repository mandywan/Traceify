import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Header from './components/header/header';
import ThankPage from './pages/thankyou/ThankPage';
import SymptomChecker from './pages/symptom-checker/symptom-checker';
import QnA from './pages/q&a/qna';
import HaveI from './pages/have-i-been-exposed/have-been-exposed';
import Reopen from './pages/reopening-date/reopening-date';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import AdminPage from './pages/admin-page/admin-page';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

function App(props) {
    return (
        <Router>
            <div
                style={{
                    position: 'fixed',
                    width: '100%',
                    top: '0',
                    height: '100px',
                    zIndex: '1',
                }}
            >
                <Header title='Covid 19 - Traceify' />
            </div>
            <ThankPage />
            <div className='App-main'>
                <AnimatePresence exitBeforeEnter>
                    <Route exact path='/' render={() => <Redirect to="/home"/>} />
                    <Route path='/home' component={Home} />
                    <Route path='/have-i-been-exposed' component={HaveI} />
                    <Route path='/qna' component={QnA} />
                    <Route path='/symptom-checker' component={SymptomChecker} />
                    <Route path='/reopen' component={Reopen} />
                    {props.isLoggedIn ? (
                        <Route path='/admin' component={AdminPage} />
                    ) : (
                        <Route path='/admin' render={() => <Redirect to="/home"/>} />
                    )}
                </AnimatePresence>
            </div>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.website.isLoggedIn,
    };
};

export default connect(mapStateToProps)(App);
