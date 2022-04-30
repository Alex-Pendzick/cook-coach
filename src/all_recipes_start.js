import React from 'react';

function AllRecipesStart() {
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
                
        <div className="row" style={{margin: "4vw"}}>
            <div class="col-md-4 recipe-card">
                <div class="row">
                    <div class="col-7">
                        <div class="bg-white" style={{borderRadius: "10px", border: "thin solid black"}}>
                            <img src={require("./images/chili.png")} alt="chili" id="chili" style={{width: "200px", marginLeft: "-0.25vw"}}></img>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="recipe-text" style={{fontSize: "0.8vw"}}>
                            <p style={{fontWeight: "bold", fontSize: "1vw", marginBottom: "1vw"}}>Chili</p>
                            <p>Prep Time: 5 minutes</p>
                            <p>Total Time: 30 minutes</p>
                            <p>Difficulty: Easy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 recipe-card">
                <div class="row">
                    <div class="col-7">
                        <div class="bg-white" style={{borderRadius: "10px", border: "thin solid black"}}>
                            <img src={require("./images/fajitas.png")} alt="fajitas" id="fajitas" style={{width: "200px", marginLeft: "-0.25vw"}}></img>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="recipe-text" style={{fontSize: "0.8vw"}}>
                            <p style={{fontWeight: "bold", fontSize: "1vw", marginBottom: "1vw"}}>Steak Fajitas</p>
                            <p>Prep Time: 20 minutes</p>
                            <p>Total Time: 1 hour</p>
                            <p>Difficulty: Easy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 recipe-card">
                <div class="row">
                    <div class="col-7">
                        <div class="bg-white" style={{borderRadius: "10px", border: "thin solid black"}}>
                            <img src={require("./images/soup.png")} alt="soup" id="soup" style={{width: "175px", marginLeft: "0.75vw"}}></img>
                        </div>
                    </div>
                    <div class="col-5">
                        <div class="recipe-text" style={{fontSize: "0.8vw"}}>
                            <p style={{fontWeight: "bold", fontSize: "1vw", marginBottom: "1vw"}}>Minestrone Soup</p>
                            <p>Prep Time: 5 minutes</p>
                            <p>Total Time: 30 minutes</p>
                            <p>Difficulty: Easy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default AllRecipesStart;
