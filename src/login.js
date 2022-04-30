import React from 'react';

function Login() {
  return (
    <div className="comfortaa-font">
        <div className = "row bg-cc-blue round" style={{margin: "2vw"}}>
            <h1 className = "text-center" style={{padding: "2vw"}}>Cook Coach Login</h1>
        </div>
        <div className = "row" style={{margin: "2vw"}}>
            <div className = "col-md-8 bg-cc-green round">
                <form style={{padding: "2vw", fontSize: "1.5vw"}}>
                    <div class="form-group" style={{padding: "1vw"}}>
                        <label for="username" style={{paddingBottom: "1vw"}}>Username</label>
                        <input type="username" class="form-control black-border" id="username-holder" placeholder="Enter Username" style={{width: "30vw"}}></input>
                    </div>
                    <div class="form-group" style={{padding: "1vw"}}>
                        <label for="password" style={{paddingBottom: "1vw"}}>Password</label>
                        <input type="password" class="form-control black-border" id="password-holder" placeholder="Enter Password" style={{width: "30vw"}}></input>
                    </div>
                    <div class="form-group" style={{padding: "1vw"}}>
                        <button type="submit" id="login-button" class="btn bg-cc-purple black-border" style={{marginBottom: "1vw", width: "12vw"}}>Login</button>
                        <br></br>
                        <button type="submit" id="create-account-button" class="btn bg-cc-purple black-border" style={{width: "12vw"}}>Create Account</button>
                    </div>
                    <label style={{padding: "1vw", fontSize: "1.25vw"}}><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Forgot Password?</a></label>
                </form>
            </div>
            <div className="col-md-4">
                <img src={require("./images/cooky_transparent.png")} alt="cooky" id="cooky-looking-left" style={{marginLeft: "4vw", marginTop: "5vw"}}></img>
                <div class="bubble bubble-bottom-right" style={{paddingTop: "5vh"}}>Hey, good to see you! Ready to get cookin'?</div>
            </div>
        </div>
    </div>
  );
}

export default Login;
