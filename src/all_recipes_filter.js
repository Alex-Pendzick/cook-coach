import React from 'react';

function AllRecipesFilter() {
  return (
    <div className="comfortaa-font">
        <div className="bg-cc-grey"style={{marginTop: "2vw", marginRight: "2vw", marginLeft: "4vw", borderRadius: "10px", width: "90vw", height: "2vw", border: "thin solid black"}}>
            <label style={{float: "right", marginRight: "1vw", marginTop: "0.25vw"}}>0/500 XP</label>
            <label style={{float: "right", marginRight: "2vw", marginTop: "0.25vw"}}>Level 1</label>
        </div>
        <div style={{marginRight: "6vw"}}>
            <img src={require("./images/coin.png")} alt="coin" id="coins" style={{float: "right", width: "25px", marginTop: "1vw", marginLeft: "0.5vw"}}></img>
            <label style={{float: "right", marginTop: "1vw"}}>0</label>
        </div>
        <div class="form" style={{marginTop: "3vw", marginLeft: "4vw"}}>
            <input class="form-input" name="search" type="input" id="search" placeholder="Click to search" style={{borderRadius: "10px", border: "thin solid black",  width: "90vw", height: "50px", padding: "10px"}}></input>
        </div>
        <div class="bg-cc-grey" style={{border: "thin solid black", width: "10vw", height: "2vw", margin: "2vw", marginLeft: "4vw", borderRadius: "10px", paddingLeft: "0.75vw", paddingTop: "0.25vw"}}>
            <label style={{marginRight: "3.5vw"}}>Filters</label>
            <img src={require("./images/plus.png")} alt="plus" id="plus" style={{width: "30px", marginTop: "-0.25vw"}}></img>
        </div>
        <div class="bg-cc-grey" style={{border: "thin solid black", width: "60vw", marginLeft: "4vw", borderRadius: "10px"}}>
            <img src={require("./images/minus.png")} alt="minus" id="minus" style={{width: "30px", float: "right", margin: "0.5vw"}}></img>
            <p style={{marginLeft: "1vw", marginTop: "0.5vw", fontWeight: "bold"}}>Filters</p>
            <div class="row" id="filter-options">
                <div class="col-md-6">
                    <div style={{marginLeft: "1vw"}}>
                        <p>Time</p>
                        <div class="form-check">
                            <input class="form-check-input" name="time" type="checkbox" id="time1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Under 15 minutes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="time" type="checkbox" id="time2"></input>
                            <label style={{marginLeft: "0.5vw"}}>30 minutes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="time" type="checkbox" id="time3"></input>
                            <label style={{marginLeft: "0.5vw"}}>1 hour +</label>
                        </div>
                    </div>
                    <div style={{marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                        <p>Difficulty</p>
                        <div class="form-check">
                            <input class="form-check-input" name="diff" type="checkbox" id="diff1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Easy</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="diff" type="checkbox" id="diff2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Medium</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="diff" type="checkbox" id="diff3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Hard</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="diff" type="checkbox" id="diff4"></input>
                            <label style={{marginLeft: "0.5vw"}}>Expert</label>
                        </div>
                    </div>
                </div>
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <div style={{marginLeft: "1vw"}}>
                        <p>Exclude</p>
                        <div class="form-check">
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergy1"></input>
                            <label style={{marginLeft: "0.5vw"}}>My Allergies</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergy2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Eggs</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergy3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Nuts</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergy4"></input>
                            <label style={{marginLeft: "0.5vw"}}>Dairy</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="allergies" type="checkbox" id="allergy5"></input>
                            <label style={{marginLeft: "0.5vw"}}>Shellfish</label>
                        </div>
                    </div>
                    <div style={{marginLeft: "1vw", marginTop: "1vw", marginBottom: "1vw"}}>
                        <p>Speciality</p>
                        <div class="form-check">
                            <input class="form-check-input" name="speciality" type="checkbox" id="speciality1"></input>
                            <label style={{marginLeft: "0.5vw"}}>Vegetarian</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="speciality" type="checkbox" id="speciality2"></input>
                            <label style={{marginLeft: "0.5vw"}}>Vegan</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" name="speciality" type="checkbox" id="speciality3"></input>
                            <label style={{marginLeft: "0.5vw"}}>Gluten Free</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AllRecipesFilter;
