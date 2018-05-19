$(function () {
    $(".devour-it").on("click", function (event) {
        let id = $(this).data("id");
        // let devouredBurger = $(this).data("devouredBurger");
        let isDevoured = {
            devoured: '1'
        };
        console.log(isDevoured);

        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: isDevoured
        }).then( () => {
            console.log("YOU DEVOURED IT!");
            location.reload();
        });
    });

    $("#add-burger").on("click", () => {
        event.preventDefault();
        console.log("click");

        const newBurger = {
            burger_name: $("#burgerText").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            method: "POST",
            data: newBurger
        }).then(() => {
            console.log("NEW BURGER ON THE MENU");
            location.reload();

        });
    });
});