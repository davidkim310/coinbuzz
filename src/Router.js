import React from 'react';
import { Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import CoinList from './components/CoinList';
import Bitcoin from './components/Bitcoin';
import Ethereum from './components/Ethereum';
import Ripple from './components/Ripple';
import Litecoin from './components/Litecoin';
import CoinProfile from './components/CoinProfile';
import Header from './components/common/Header'

import { Actions } from 'react-native-router-flux';


const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" navBar={Header} >
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" />
                </Scene>
                <Scene key="profile" component={CoinProfile} />
                <Scene key="main" initial>
                    <Scene
                        // rightTitle="Add"
                        // onRight={() => }
                        key="coinList"
                        component={CoinList}
                        title="Cryptocurrencies"
                    />
                    <Scene key="btc" component={Bitcoin} title="Bitcoin" />
                    <Scene key="eth" component={Ethereum} title="Ethereum" />
                    <Scene key="xrp" component={Ripple} title="Ripple" />
                    <Scene key="ltc" component={Litecoin} title="Litecoin" />
                </Scene>

            </Scene>
        </Router>
    );
}

export default RouterComponent