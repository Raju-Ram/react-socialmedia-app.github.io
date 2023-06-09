import "./Register.css"

export default function Register() {
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
                        <input placeholder="Username" className="logininput" />
                        <input placeholder="Email" className="logininput" />
                        <input placeholder="Password" className="logininput" />
                        <input placeholder="Confirm Password" className="logininput" />
                        <button className="loginbutton">Sign Up</button>
                        <span className="loginforget">Forgrt Password</span>
                        <button className="loginregisterbutton">Log into Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
