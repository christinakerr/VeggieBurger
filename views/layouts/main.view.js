const {renderUneatenBurger, renderEatenBurger } = require("../burgers.views")

module.exports = function (props) {
    const { children } = props;
    return /*html*/`    <div class="jumbotron">
    <h1>Eat the Veggie Burger!</h1>
</div>
<div class="container">

    ${burgers
        .filter(burger => !burger.devoured)
        .map(burger => renderUneatenBurger(burger))
        .join("")
    }

    ${burgers
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.min.js"></script>`
}

