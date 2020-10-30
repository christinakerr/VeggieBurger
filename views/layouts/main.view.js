const { renderUneatenBurger, renderEatenBurger } = require("../burgers.views")

module.exports = function (props) {
    // console.log(props);
    // const { burger_name } = props;
    return /*html*/`    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/flatly/bootstrap.min.css">

    <style>

        .jumbotron{
            text-align: center;
        }

        .container {
            margin: 0 auto;
        }

        .btn-success {
            width: 100px;
            margin: 0 auto;
        }

        .card {
            margin: 10px auto;
            padding: 10px;
            width: 300px;
        }

        form {
            margin: 10px auto;
        }

        .eaten {
            background-color: #cccccc;
        }

        .col-md-12{
            text-align: center;

        }

        .col-md-6 {
            text-align: center;
            float: left;
        }

        .row {
            clear: both;
        }

    </style>
    <title>Eat the Veggie Burger!</title>
</head>

<body>
    <div class="jumbotron">
    <h1>Eat the Veggie Burger!</h1>
</div>
<div class="container">
    <div class="col-md-6">

    ${props
            .filter(burger => !burger.devoured)
            .map(burger => renderUneatenBurger(burger))
            .join("")
        }
        </div>
        <div class="col-md-6">
    ${props
            .filter(burger => burger.devoured)
            .map(burger => renderEatenBurger(burger))
            .join("")
        }
        </div>

    <div class="row">
        <div class="col-md-12">
            <form class="create-form">

                <div class="form-group">
                    <label for="burger">Burger Name:</label>
                    <input type="text" id="burger" name="name">
                </div>
                <button type="submit" class="btn btn-primary">Add Veggie Burger</button>
            </form>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script>

$(".create-form").on("submit", function(event) {

    event.preventDefault();

    const newBurger = {
        name: $("#burger").val().trim(),
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function () {
        console.log("Created new burger!");

        location.reload();
    }
        
    );
});

$(".devour").on("click", function(event) {
    const id = $(this).data("id");

    const isDevoured = {
        devoured: true
    };

    $.ajax("/api/burgers/" + id, {
        type: "PATCH",
        data: isDevoured
    }).then(
        function() {
        console.log("burger was devoured");
        location.reload();
        }
    );
    });

</script>
</body>`
}

