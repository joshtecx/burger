$(() => {
    $(".devour-it").on("click", (event) => {
        const id = $(this).data("id");
        const devoured = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            method: "PUT",
            data: devoured
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