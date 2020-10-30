module.exports = {
    renderUneatenBurger(props) {
        const { id, burger_name } = props;
        return /*html*/ `
            <div class="card">
                <p class="burger-name">${id}. ${burger_name}</p>
                <button class="btn btn-success devour" data-id="${id}">Devour!</button>
            </div>
    `
    },

    renderEatenBurger(props) {
        const { id, burger_name } = props;
        return /*html*/ `
            <div class="card eaten">
                <p class="burger-name">${id}. ${burger_name}</p>
            </div>
`
    }
}