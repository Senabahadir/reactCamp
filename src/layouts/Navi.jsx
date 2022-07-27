import React from 'react'
// import CartSummary from './CartSummary'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item name='home'/>
                <Menu.Item name='messages' />

                <Menu.Menu position='right'>
                    <CartSummary></CartSummary>

                    <SignedOut></SignedOut>
                    <SignedIn></SignedIn>
                    
                </Menu.Menu>
            </Container>
        </Menu>
    )
}
