import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1527521140025004040/NAcUvv_f_400x400.jpg"/>
            <Dropdown pointing="top left" text="Vestel">
            <Dropdown.Menu>
                <Dropdown.Item text="Bilgilerim" icon="info"/>
                <Dropdown.Item text="Çıkış Yap" icon="sign out"/>
            </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
