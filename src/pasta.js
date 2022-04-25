import React from 'react'

function PastaRecipe() {
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

                            <h2>Simple Pasta</h2>
                            <p>Click on the button to toggle between showing and hiding content.</p>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#boil"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">1. Boil water</h1>
                                <div id="boil" class="collapse">
                                    <p><span class="tab"></span>1. Measure out eight cups of
                                        water into a large pot</p>
                                    <p><span class="tab"></span>2. Put pot on the stovetop and
                                        turn heat to highest setting</p>
                                    <p><span class="tab"></span>3. Wait for water to bubble and
                                        boil</p>
                                </div>
                            </div>


                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#salt"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">2. Salt Wwter</h1>
                                <div id="salt" class="collapse">
                                    <p><span class="tab"></span>1. Once the water is boiling, add about a fourth of a tablespoon of salt</p>
                                </div>
                            </div>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#cookNoodles"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">3. Put uncooked pasta in water and read pasta box for how long pasta should cooked</h1>
                                <div id="cookNoodles" class="collapse">
                                    <p><span class="tab"></span>1. Look on the side of the box for how long to boil the pasta</p>
                                    <p><span class="tab"></span>2. Stir occassionally to make sure the pasta does not stick to the bottom of the pot</p>
                                </div>
                            </div>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#heatSauce"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">4. While pasta is boiling, heat pasta sauce in the sauce pan</h1>
                                <div id="heatSauce" class="collapse">
                                    <p><span class="tab"></span>1. Put the sauce in a small sauce pan</p>
                                    <p><span class="tab"></span>2. Put the pan on the stovetop and set to a medium heat</p>
                                    <p><span class="tab"></span>3. Wait about 10 minutes, or until the sauce is warm</p>
                                </div>
                            </div>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#strain"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">5. Remove pot from heat and strain pasta</h1>
                                <div id="strain" class="collapse">
                                    <p><span class="tab"></span>1. Put the colander in the sink</p>
                                    <p><span class="tab"></span>2. Pour hot contents from pot into the colander</p>
                                    <p><span class="tab"></span>3. The water will be very hot, be careful not to splash the water onto skin</p>
                                </div>
                            </div>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#mix"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">6. In the large pot, add cooked pasta and heated sauce</h1>
                                <div id="mix" class="collapse">
                                    <p><span class="tab"></span>1. Put the pasta from the colander back into the large pot</p>
                                    <p><span class="tab"></span>2. Remove the sauce from the stove and pour it into the pot</p>
                                </div>
                            </div>

                            <div class="style=display: flex;">
                                <button type="button" class="btn btn-primary dropdown-toggle"
                                    data-toggle="collapse" data-target="#enjoy"><span
                                        class="caret"></span></button>
                                <h1 style="display:inline-block">7. Mix together, add garnishes, and enjoy!</h1>
                                <div id="enjoy" class="collapse">
                                    <p><span class="tab"></span>1. Stir the contents of in the pot to make sure the sauce covers all of the pasta</p>
                                    <p><span class="tab"></span>2. Add any desired toppings such as cheese or red pepper</p>
                                    <p><span class="tab"></span>3. Serve and enjoy!</p>
                                </div>
                            </div>

                        </div>
                    </body>
                </html>
                )
};

                export default PastaRecipe