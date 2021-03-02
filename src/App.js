import { Redirect, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import cls from './App.module.css';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import About from './pages/About';
import Certificate from './pages/ Сertificate';
import Products from './pages/Products';
import News from './pages/News';
import Contacts from './pages/Contacts';
import { Provider } from 'react-redux';
import store from './redux/store';
import SingleNews from './pages/News/SingleNews';


const App = () =>{
    return(
        <div className={cls.root}>
            <Provider store={store}>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/products" component={Products} />
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route path="/certificate" component={Certificate} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/single" component={SingleNews} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </Provider>
        </div>
    )
}

export default App