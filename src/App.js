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

const App = () =>{
    return(
        <div className={cls.root}>
            <NavBar />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/products" component={Products} />
                <Route path="/about" component={About} />
                <Route path="/news" component={News} />
                <Route path="/certificate" component={Certificate} />
                <Route path="/contacts" component={Contacts} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </div>
    )
}

export default App