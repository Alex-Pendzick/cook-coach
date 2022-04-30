import React from 'react';
import './StartPasta.css';
import { Link } from "react-router-dom";
import "./bootstrap.min.css";

var clicks = 1;
var pastaAmt = 0.25;
var sauceAmt = 0.25;


function onClick() {
    clicks += 1;
    pastaAmt = .25 * clicks;
    sauceAmt = .25 * clicks;
    // document.getElementById("clicks").innerHTML = clicks;
    // document.getElementById("pastaAmt").innerHTML = pastaAmt;
    // document.getElementById("sauceAmt").innerHTML = sauceAmt;

};

function onClickBack() {
    clicks -= 1;
    if (clicks < 1) {
        clicks = 1
        pastaAmt = 0.25
        sauceAmt = 0.25

    }
    pastaAmt = .25 * clicks;
    sauceAmt = .25 * clicks;
    // document.getElementById("clicks").innerHTML = clicks;
    // document.getElementById("pastaAmt").innerHTML = pastaAmt;
    // document.getElementById("sauceAmt").innerHTML = sauceAmt;
}

function StartPasta() {
    return (
        <html>
            {/* <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                    <link rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
                        <script
                            src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                        <script
                            src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

                    </head> */}


            <body>
                <div>
                    <div className="container">

                        <div style="display: flex;">
                            <h3 style="display: inline-block;">Simple Pasta</h3>
                            <img style="display: inline-block; position: absolute; top:
                    10px; right: 300px; width: 200px" src="../images/pastaIcon.png" alt="pastaImage"></img>
                        </div>
                    </div>

                    <div className="container">
                        <div style="float:left">
                            <div>
                                <h3>Servings</h3>
                                <div style="margin-left: 50px">
                                    <button type="button" className="servings" style="display: inline-block;
                        background-color: #FF0000;" onClick={onClickBack()}>-</button>
                                    <p style="display: inline-block; padding-left: 10px;
                        padding-right: 10px; font-size: 32px;"><span id="clicks">1</span></p>
                                    <button className="servings" type="button" style="display: inline-block;
                        background-color: #87FF8B" onClick={onClick()}>+</button>
                                </div>

                            </div>

                            <div>
                                <h3>Substitution Options</h3>
                                <div style="margin-left: 50px">
                                    <div>
                                        <button type="button" style="background-color: #C59BEB;" className="btn btn-primary
                            dropdown-toggle"
                                            data-toggle="collapse"
                                            data-target="#salt"><span className="caret"></span></button>
                                        <h1 style="display:inline-block;">salt</h1>
                                        <div id="salt" className="collapse">
                                            <p><span className="tab" style="display: inline-block;"></span>Remove</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="button" style="background-color: #C59BEB;" className="btn btn-primary
                            dropdown-toggle"
                                            data-toggle="collapse"
                                            data-target="#cheese"><span className="caret"></span></button>
                                        <h1 style="display:inline-block;">cheese</h1>
                                        <div id="cheese" className="collapse">
                                            <p><span className="tab" style="display: inline-block;"></span>Remove</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Vegan cheese</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="button" style="background-color: #C59BEB;" className="btn btn-primary
                            dropdown-toggle"
                                            data-toggle="collapse"
                                            data-target="#basil"><span className="caret"></span></button>
                                        <h1 style="display:inline-block;">basil</h1>
                                        <div id="basil" className="collapse">
                                            <p><span className="tab" style="display: inline-block;"></span>Remove</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Oregano</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Spinach</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Italian Seasoning</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button type="button" style="background-color: #C59BEB;" className="btn btn-primary
                            dropdown-toggle"
                                            data-toggle="collapse"
                                            data-target="#rpf"><span className="caret"></span></button>
                                        <h1 style="display:inline-block;">red pepper flakes</h1>
                                        <div id="rpf" className="collapse">
                                            <p><span className="tab" style="display: inline-block;"></span>Remove</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Cayenne Pepper Powder</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Chipotle Powder</p>
                                            <p><span className="tab" style="display: inline-block;"></span>Chili Powder</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div style="position: relative; left: 100px; float:left;">
                            <div>
                                <h3>Ingredients</h3>
                                <div style="margin-left: 25px">
                                    <ul>
                                        <li><p style="display: inline-block;"><span id="pastaAmt">0.25</span></p> box of pasta</li>
                                        <li><p style="display: inline-block;"><span id="sauceAmt">0.25</span></p> jar of pasta sauce</li>
                                        <li>salt</li>
                                        <li>Optional garnishes:</li>
                                        <ul>
                                            <li>grated cheese</li>
                                            <li>basil</li>
                                            <li>red pepper flakes</li>
                                        </ul>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3>Materials</h3>
                                <div style="margin-left: 25px">
                                    <ul>
                                        <li><button type="button" data-toggle="collapse" data-target="#largePot">large pot (6-8 quarts)</button></li>
                                        <li><button type="button" data-toggle="collapse" data-target="#saucePan">sauce pan</button></li>
                                        <li><button type="button" data-toggle="collapse" data-target="#spoon">large cooking spoon</button></li>
                                        <li><button type="button" data-toggle="collapse" data-target="#colander">colander</button></li>
                                    </ul>

                                    <div id="largePot" className="popover" style="max-width: 100%; max-height: 100%">
                                        <iframe style="width: 300px; height: 234px"
                                            src="../images/largePot.png"
                                            allowFullScreen></iframe>
                                    </div>

                                    <div id="saucePan" className="popover" style="max-width: 100%; max-height: 100%">
                                        <iframe style="width: 300px; height: 112px"
                                            src="../images/saucePan.png"
                                            allowFullScreen></iframe>
                                    </div>

                                    <div id="spoon" className="popover" style="max-width: 100%; max-height: 100%">
                                        <iframe style="width: 300px; height: 299px"
                                            src="../images/spoon.png"
                                            allowFullScreen></iframe>
                                    </div>

                                    <div id="colander" className="popover" style="max-width: 100%; max-height: 100%">
                                        <iframe style="width: 300px; height: 184px"
                                            src="../images/colander.png"
                                            allowFullScreen></iframe>
                                    </div>

                                </div>
                            </div>

                            <br></br>
                            <div id="nextbutton" style="position: relative; margin-left: 300px">
                                <Link to="/pastaMain">
                                    <button type="button" style="background-color: #C59BEB; padding: 10px">Next</button>
                                </Link>
                                
                            </div>
                        </div>

                    </div >

                </div >
            </body >
        </html >
    );
}

export default StartPasta;