$(document).ready(function () {
    var $input = $("input[name='framework_name']");
    var $output = $("#js-output");
    $input.on("change", function (event) {
        var $selectedInput = $(event.target);
        $output.text("You use: " + $selectedInput.val());
    });
});