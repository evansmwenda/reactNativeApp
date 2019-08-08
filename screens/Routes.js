import React , {Component} from 'react'
import { Router, Scene} from 'react-native-router-flux'
import Home from './HomeScreen'
import Login from './LoginScreen'
import Register from './RegisterScreen'

class Routes extends Component{
    render(){
        return(
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Raashin" initial={true}/>
                <Scene key="login" component={Login} title="Login" />
                <Scene key="register" component={Register} title="Register" />
    
            </Scene>
        </Router>
        );
    }
}
// const Routes = () => {
    // //run function Routes
    // <Router>
    //     <Scene key="root">
    //         <Scene key="home" component={Home} title="Raashin" initial={true}/>
    //         <Scene key="login" component={Login} title="Login" />
    //         <Scene key="register" component={Register} title="Register" />

    //     </Scene>
    // </Router>
//}

export default Routes
