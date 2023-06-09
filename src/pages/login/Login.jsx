import "./Login.css"

export default function Login() {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <div className="loginlogo">OneclickSocialApp</div>
                    <span className="logindesc">
                        Contect with friends and the world around you on Oneclick
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <button className="loginbutton">Log In</button>
                        <span className="loginforget">Forgrt Password</span>
                        <button className="loginregisterbutton">Create a new Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
