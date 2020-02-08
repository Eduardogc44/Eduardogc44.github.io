
class Generos {

    RegistrarGenero() {
        $.post(
            "GetGeneros",
            $('.formGenero').serialize(),
            (response) => {
                try {
                    var item = JSON.parse(response);
                    if (Item.Code == "Done") {
                        window.location.href = "Index";
                    } else {
                        document.getElementById("mensaje").innerHTML = item.Description;
                    }
                } catch (e) {
                    document.getElementById("mensaje").innerHTML = response;
                }                
                console.log(response);
            }
        );
    }
}
