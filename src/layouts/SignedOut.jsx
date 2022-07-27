import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut(props) { //props yerine direk fonksiyon yazılabilir.
  return (
    <div>
        <MenuItem>
            <Button primary onClick={props.signIn}>Giriş Yap</Button>  {/*Parametre olarak props yerine fonksiyon adı yazıldıysa direkt fonk. adı yazılabilir. */}
            <Button primary style={{marginLeft:"0.5em"}} >Kayıt ol</Button>
        </MenuItem>
    </div>
  )
}
