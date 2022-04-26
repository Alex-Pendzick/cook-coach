import React from 'react';

function finishPasta() {
  return (
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/5.1.3/css/bootstrap.min.css"></link>
        <script
            src="https://ajax.googleapis.com/ajax/libs/jquery/5.1.3/jquery.min.js"></script>
        <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.min.js"></script>
        <style>
            .speech-bubble {
                background: #efefef;
                border-radius: 4px;
                font-size: 1.2rem;
                line-height: 1.3;
                max-width: 400px;
                padding: 15px;
                position: relative;
                left: 10px;

            } .speech-bubble::after {
                    border-left: 20px solid transparent;
                    border-top: 20px solid #efefef;
                    bottom: -20px;
                    content: "";
                    position: absolute;
                    right: 20px;
            }
            </style>
    </head>

    <body>

        <div class="container">

            <h2>You have completed your Simple Pasta!</h2>

            <div class="speech-bubble" style="width: 50%; position: relative; left: 20%;">
                <p>That looks awesome! Mind if I have some?</p>
            </div>

            <div class="style=display: flex;">
                <div style="display: inline-block;">
                    <div class="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #22AABB; width: 100px;">
                        <div class="card-body" style="padding: 10px;">
                            <p class="card-text">+ 750 XP</p>
                            <p class="card-text">+ 100 Coins</p>
                        </div>
                    </div>

                    <br></br>

                    <div class="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #87FF8B; width: auto">
                        <div class="card-body" style="padding: 10px;">
                            <p class="card-text">Achievement Earned: Gettin' Cookin!</p>
                        </div>
                    </div>

                    <br></br>

                    <div class="card bg-info mb-3" style="position:relative; left: 100px; border-style: solid; background-color: #87FF8B; width: auto">
                        <div class="card-body" style="padding: 10px;">
                            <p class="card-text">Achievement Earned: Pasta Pursuer</p>
                        </div>
                    </div>

                </div>


                <img class="card-img-top" src="./509ebb9d146d423b9e310e21a121c87e.png" alt="Cookie" style="display: inline-block; max-width: 30%; position: relative; left: 30%"></img>

                <div class="DoneButton" style="position: absolute; padding-right: 50px; right: 10%;">
                <button type="button" style="background-color: #C59BEB; width:auto;"
                    onclick="window.location.href='...'">Record your recipe</button> 
                    {/* update link for implementation */}
                </div>

            </div>
        </div>

    </body>
</html>
  );
}

export default finishPasta;
