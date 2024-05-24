$(document).ready(function() {
    $(".draggable").draggable({
        revert: true,
        helper: "clone"
    });

    $("#mannequin").droppable({
        accept: ".draggable",
        drop: function(event, ui) {
            var clonedElement = $(ui.helper).clone();
            clonedElement.css({
                width: "150px",
                height: "auto"
            });
            $(this).append(clonedElement);
        }
    });
});