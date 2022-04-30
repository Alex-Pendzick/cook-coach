import React from 'react';

function BeginnerQuiz() {
  return (
    <div className="comfortaa-font">
        <div className = "row bg-cc-grey round" style={{margin: "2vw"}}>
            <h1 className = "text-center" style={{padding: "2vw"}}>Welcome to Cook Coach!</h1>
        </div>
        <div>
            <h5 className="text-center">Take this quick quiz so we can learn more about you!</h5>
            <hr className="hr"></hr>
        </div>
        <div className = "row" style={{margin: "2vw"}}>
            <div id="question-1" style={{fontSize: "1.25vw"}}>
                <div id="question-1-text">
                    1. How confident are you with cooking?
                </div>
                <div className="bg-cc-grey form-check" id="slider" style={{marginLeft: "5.5vw", marginRight: "10vw", marginTop: "2vw", borderRadius: "10px"}}>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident1" style={{marginLeft: "5vw"}}></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident2"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident3"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident4"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident5"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident6"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident7"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident8"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident9"></input>
                    </div>
                    <div class="form-check-inline">
                        <input class="form-check-input slider-spacer" name="confidence-slider" type="radio" id="confident10"></input>
                    </div>
                </div>
                <div style={{marginTop: "1vw"}}>
                    <label style={{marginLeft: "8.5vw"}}>I can't cook!</label>
                    <label style={{marginLeft: "20vw"}}>I can cook if I have help</label>
                    <label style={{marginLeft: "15vw"}}>I am a cooking pro!</label>
                </div>
            </div>
            <div id="question-2" style={{fontSize: "1.25vw", marginTop: "3vw"}}>
                <div id="question-2-text">
                    2. Which of the following have you made in the last three months?
                </div>
                <div class="row" style={{marginLeft: "4.5vw", marginTop: "1vw", fontSize: "1.15vw"}}>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Pasta</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Eggs</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Chicken</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Steak</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Fish</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Tofu</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Soup</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Rice</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="foods-made" type="checkbox" id="checkbox3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Tacos</label>
                        </div>
                    </div>
                </div>
            </div>

            <div id="question-3" style={{fontSize: "1.25vw", marginTop: "3vw"}}>
                <div id="question-3-text">
                    3. Please select any allergies you have.
                </div>
                <div class="row" style={{marginLeft: "4.5vw", marginTop: "1vw", fontSize: "1.15vw"}}>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Eggs</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Dairy</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Peanuts</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies4"></input>
                            <label style={{marginLeft: "0.5vw"}}>Shell Fish</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies5"></input>
                            <label style={{marginLeft: "0.5vw"}}>Soy</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies6"></input>
                            <label style={{marginLeft: "0.5vw"}}>Wheat</label>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies7"></input>
                            <label style={{marginLeft: "0.5vw"}}>Tree Nuts</label>
                        </div>
                        <div class="form-check" style={{marginBottom: "1vw"}}>
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergies8"></input>
                            <label style={{marginLeft: "0.5vw"}}>Fish</label>
                        </div>
                        <div class="form" style={{marginBottom: "1vw"}}>
                            <label style={{marginRight: "0.5vw"}}>Other</label>
                            <input class="form-input" name="allergies" type="input" id="allergies9" style={{borderRadius: "10px", border: "thin solid black"}}></input>
                        </div>
                        <div class="form-group" style={{marginTop: "2.5vw"}}>
                            <button type="submit" id="finish-quiz-button" class="btn bg-cc-purple black-border" style={{width: "18vw"}}>Finish</button>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
    </div>
  );
}

export default BeginnerQuiz;
