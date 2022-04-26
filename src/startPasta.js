import React from 'react';

var clicks = 1;
var pastaAmt = 0.25;
var sauceAmt = 0.25;


function onClick() {
    clicks += 1;
    pastaAmt = .25 * clicks;
    sauceAmt = .25 * clicks;
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("pastaAmt").innerHTML = pastaAmt;
    document.getElementById("sauceAmt").innerHTML = sauceAmt;

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
    document.getElementById("clicks").innerHTML = clicks;
    document.getElementById("pastaAmt").innerHTML = pastaAmt;
    document.getElementById("sauceAmt").innerHTML = sauceAmt;
}

function finishPasta() {
  return (
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
    <script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>

    <body>
        <div class="container">

            <div class="style=display: flex;">
                <h2 style="display: inline-block;">Simple Pasta</h2>
                <img style="display: inline-block; position: absolute; top:
                    10px; right: 10px;" src="..." alt="pastaImage"></img>
            </div>
        </div>

    <div class="container">
        <div style="float:left">
            <div>
                <h3>Servings</h3>
                <div style="margin-left: 50px">
                    <button type="button" style="display: inline-block;
                        background-color: #FF0000;" onClick="onClickBack()">-</button>
                    <p style="display: inline-block; padding-left: 10px;
                        padding-right: 10px"><a id="clicks">1</a></p>
                    <button type="button" style="display: inline-block;
                        background-color: #87FF8B" onClick="onClick()">+</button>
                </div>

            </div>

            <div>
                <h3>Substitution Options</h3>
                <div style="margin-left: 50px">
                    <div>
                        <button type="button" style="background-color: #C59BEB;" class="btn btn-primary
                            dropdown-toggle"
                            data-toggle="collapse"
                            data-target="#salt"><span class="caret"></span></button>
                        <h1 style="display:inline-block; font-size: large;">salt</h1>
                        <div id="salt" class="collapse">
                            <p><span class="tab" style="display: inline-block;
                                    margin-left: 40px;"></span>Remove</p>
                        </div>
                    </div>

                    <div>
                        <button type="button" style="background-color: #C59BEB;" class="btn btn-primary
                            dropdown-toggle"
                            data-toggle="collapse"
                            data-target="#cheese"><span class="caret"></span></button>
                        <h1 style="display:inline-block; font-size: large;">cheese</h1>
                        <div id="cheese" class="collapse">
                            <p><span class="tab" style="display: inline-block;
                                    margin-left: 40px;"></span>Remove</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Vegan cheese</p>
                        </div>
                    </div>

                    <div>
                        <button type="button" style="background-color: #C59BEB;" class="btn btn-primary
                            dropdown-toggle"
                            data-toggle="collapse"
                            data-target="#basil"><span class="caret"></span></button>
                        <h1 style="display:inline-block; font-size: large;">basil</h1>
                        <div id="basil" class="collapse">
                            <p><span class="tab" style="display: inline-block;
                                    margin-left: 40px;"></span>Remove</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Oregano</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Spinach</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Italian Seasoning</p>
                        </div>
                    </div>

                    <div>
                        <button type="button" style="background-color: #C59BEB;" class="btn btn-primary
                            dropdown-toggle"
                            data-toggle="collapse"
                            data-target="#rpf"><span class="caret"></span></button>
                        <h1 style="display:inline-block; font-size: large;">red pepper flakes</h1>
                        <div id="rpf" class="collapse">
                            <p><span class="tab" style="display: inline-block;
                                    margin-left: 40px;"></span>Remove</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Cayenne Pepper Powder</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Chipotle Powder</p>
                            <p><span class="tab" style="display: inline-block;
                                margin-left: 40px;"></span>Chili Powder</p>
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
                            <li><p style="display: inline-block;"><a id="pastaAmt">0.25</a></p> box of pasta</li>
                            <li><p style="display: inline-block;"><a id="sauceAmt">0.25</a></p> jar of pasta sauce</li>
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
                            <!-- add hover images -->
                            <li>large pot (6-8 quarts)</li> 
                            <li>sauce pan</li>
                            <li>large cooking spoon</li>
                            <li>colander</li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        

    </body>
</html>
  );
}

export default finishPasta;