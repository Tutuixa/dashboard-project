import { useNavigate } from "react-router-dom"
import "./Login.css"

export function Login (){
    const navigate = useNavigate()
    function clickTologin () {
       navigate('Dashboard')
    }
 return(
    <div id="container">
    <form>
        <input type="email" name="email" id="email" placeholder="E-mail"/>
        <input type="password" name="password" id="email" placeholder="Senha"/>
        <button onClick={clickTologin} type="submit">Login</button>
    </form>
    </div>
 )
}