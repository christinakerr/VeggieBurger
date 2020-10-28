const {renderUneatenBurger, renderEatenBurger } = require("../burgers.views")

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
    <link rel="stylesheet" href="../../mockup/style.css">
    <title>Eat the Veggie Burger!</title>
</head>

<body>
    <div class="jumbotron">
    <h1>Eat the Veggie Burger!</h1>
</div>
<div class="container">

    ${props
        .filter(burger => !burger.devoured)
        .map(burger => renderUneatenBurger(burger))
        .join("")
    }

    ${props
        .filter(burger => burger.devoured)
        .map(burger => renderEatenBurger(burger))
        .join("")
    }

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
</body>`
}

