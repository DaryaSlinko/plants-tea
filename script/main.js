$(document).ready(function () {

    $('.imageOpen').magnificPopup({
        type: 'image'
    });


    $('.single-item').slick();
    $("#accordion").accordion();

    let index = $('#inputIndex')

    index.keydown(function (e) {
            if (isNaN(parseInt(e.key)) && e.key.toLowerCase() !== "backspace") {
                return false;
            }
        }
    )

    function indexLength() {
        if (index.val().length > 6) {
            $(".notification").removeClass("d-none")
            $('#inputIndex').addClass('border-danger')
        }
        if (index.val() && index.val().length < 6) {
            $(".notification").addClass("d-none")
            $('#inputIndex').removeClass('border-danger')
        }
    }


    function validate() {





        if (!$('#inputName').val()) {
            $('#inputName').addClass('border-danger')
            return false;
        }$('#inputName').removeClass('border-danger')

        if (!$('#inputSurame').val()) {
            $('#inputSurame').addClass('border-danger')
            return false;
        }$('#inputSurame').removeClass('border-danger')

        if (!$('#inputPhone').val()) {
            $('#inputPhone').addClass('border-danger')
            return false;
        }$('#inputPhone').removeClass('border-danger')

        if (!$('#inputCountry').val()) {
            $('#inputCountry').addClass('border-danger')
            return false;
        } $('#inputCountry').removeClass('border-danger')

        if ((!index.val()) || (index.val().length > 6)) {
            $('#inputIndex').addClass('border-danger')
            return false;
        } $('#inputIndex').removeClass('border-danger')


        if (!$('#inputAdress').val()) {
            $('#inputAdress').addClass('border-danger')
            return false;
        } $('#inputAdress').removeClass('border-danger')

        return true;
    }


    const myModal = $('#myModal')
    const myInput = $('#myInput')

    myModal.on('shown.bs.modal', () => {
        myInput.focus()
    })


    function openPopup() {
        $(".form").addClass("d-none")
        $(".titleForOrder").addClass("d-none")
        $(".popup").addClass("modal-dialog-centered")
        $(".nameSpan").text($("#inputName").val())
    }

    $('.form').submit(function (event) {

        event.preventDefault()

        const IsValid = validate()
        indexLength()
        if (IsValid) {
            openPopup()
        }
    })


    $(".btn-close").click(function () {
        $(".popup").removeClass("modal-dialog-centered")
        $(".form").removeClass("d-none")
        $(".form")[0].reset()

        $(".titleForOrder").removeClass("d-none")

    })


    new WOW({
        animateClass: 'animate__animated',
    }).init();


})

