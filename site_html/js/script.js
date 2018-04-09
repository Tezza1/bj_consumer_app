$(document).ready(function(){

    $(".eng-flag").click(function(){
        $(".jpn-lang").hide();
        $(".eng-lang").show();
    });

    $(".jpn-flag").click(function(){
        $(".eng-lang").hide();
        $(".jpn-lang").show();
    });
});
