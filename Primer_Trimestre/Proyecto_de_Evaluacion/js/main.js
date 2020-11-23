document.addEventListener("DOMContentLoaded", function() {
    $("#programming").hover(function(hover) {
        if ('mouseenter' == hover.type) {
            $('#programming').children().eq(2).css('display','block');
            $('#edition').children().eq(2).css('display','none');
            $('#programming_table').css('display', 'block');
            $('#edition_table').css('display', 'none');
        }
    });

    $("#edition").hover(function(hover) {
        if ('mouseenter' == hover.type) {
            $('#programming').children().eq(2).css('display','none');
            $('#edition').children().eq(2).css('display','block');
            $('#edition_table').css('display', 'block');
            $('#programming_table').css('display', 'none');
        }
    });
});