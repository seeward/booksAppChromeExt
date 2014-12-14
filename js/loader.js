$(document).ready(function() {
    var bList = {};
    var bTable = "";

    renderTable = function(data) {


        $.each(data, function(i, obj) {
            if (obj.NAME != "") {
                //console.log(JSON.stringify(obj))
                bTable = bTable + "<tr><td>" + obj.NAME + "</td><td>" + obj.AUTHOR + "</td><td>" + obj.DATE + "</td></tr>";
            }

        });
        $("#loader").hide()
        window.localStorage.setItem("tabler", bTable);
bTableHead = "<tr><th>Title</th><th>Author</th><th>Date</th></tr>"
$("#bookTable").html(bTableHead);
        $("#bookTable").append(bTable);

    };


    init = function() {
        gather();
    }


    $(".bookRow").on("click", function() {
        console.log("LOG " + this.id);
    })


    gather = function() {
        if (window.localStorage.getItem("tabler")) {
            data = window.localStorage.getItem("tabler");
            $("#loader").hide();
            bTable = "<tr><th>Title</th><th>Author</th><th>Date</th></tr>"
            $("#bookTable").html(bTable + data);
        } else {
            $.ajax({
                url: "http://seeward.com/books_app.php",
                cache: true,
                dataType: "json",
            }).done(function(html) {
                $("#loader").hide();

                renderTable(html);

            });
        }
    }


    $("#bookTable").searcher({
        inputSelector: "#searchTerm"
        // itemSelector (tbody > tr) and textSelector (td) already have proper default values
    });









    init();





})