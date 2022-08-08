import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1478481906396246021/CFjLq2ik_400x400.jpg"/>
            <Dropdown pointing="top left" text="Sena">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item onClick ={props.signOut} text="Çıkış Yap" icon="sign out"/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
