import React, {useState} from "react";
import { useNavigate } from "react-router";
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { useSelector } from 'react-redux'


export default function Navi() {
    const {cartItems} = useSelector(state => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const navigate = useNavigate()   // const history = useHistory()
    
    function handleSignOut(params) { //Çıkış Yap
        setIsAuthenticated(false)
        navigate('/')    //history.push('/')
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }


    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item name='home'/>
                <Menu.Item name='messages' />

                <Menu.Menu position='right'>
                     {cartItems.lenght>0&&<CartSummary/>}  {/* eleman sayısı 0dan büyükse CartSummary'i render et demek */}

                    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
                    :<SignedOut signIn={handleSignIn}/>}
                    
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
