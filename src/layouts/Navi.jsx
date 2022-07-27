import React, {useState} from "react";
import { useNavigate } from "react-router";
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
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
                    <CartSummary></CartSummary>

                    {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>
                    :<SignedOut signIn={handleSignIn}/>}
                    
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
