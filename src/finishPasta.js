import React from 'react';
import './FinishPasta.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function FinishPasta() {
    return (
        <html>

            <div className="FinishPasta" id="root">

                <h2>You have completed your Simple Pasta!</h2>

                <div className="speech-bubble" style="width: 50%; position: relative; left: 20%;">
                    <p>That looks awesome! Mind if I have some?</p>
                </div>

                <div className="style=display: flex;">
                    <div style="display: inline-block;">
                        <div className="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #22AABB; width: 150px; text-align: center;">
                            <div className="card-body" style="padding: 10px;">
                                <p className="card-text">+ 750 XP</p>
                                <p className="card-text">+ 100 Coins</p>
                            </div>
                        </div>

                        <br></br>

                        <div className="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #87FF8B; width: auto">
                            <div className="card-body" style="padding: 10px;">
                                <p className="card-text">Achievement Earned: Gettin' Cookin!</p>
                            </div>
                        </div>

                        <br></br>

                        <div className="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #87FF8B; width: auto">
                            <div className="card-body" style="padding: 10px;">
                                <p className="card-text">Achievement Earned: Pasta Pursuer</p>
                            </div>
                        </div>

                    </div>


                    <img className="card-img-top" src="../images/509ebb9d146d423b9e310e21a121c87e.png" alt="Cookie" style="display: inline-block; max-width: 30%; position: relative; left: 30%"></img>

                    <div className="DoneButton" style="position: absolute; padding-right: 50px; right: 10%;">
                        <button type="button" style="background-color: #C59BEB; width:auto; padding: 10px"
                            onclick="window.location.href='...'">Record your recipe</button>
                    </div>

                </div>

            </div>

        </html>
    );
}

export default FinishPasta;
