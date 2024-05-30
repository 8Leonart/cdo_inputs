$(function () {

    let inputActive = false;

    function hideModal() {
        inputActive = false;
        $('.overlay').fadeOut();
    }

    function showModal() {
        inputActive = true;
        $('.overlay').fadeIn();
    }

    hideModal();


    datatype = "text";

    window.addEventListener("message", function (event) {
        if (event.data.type == "enableinput") {
            const data = event.data;
            showModal();
            inputActive = data.style === 'block';

            document.body.style.display = data.style;

            const inputEle = document.getElementById("inputUser");
            const inputNumberEle = document.getElementById("inputUserNumber");
            const buttonEle = document.getElementById("subButton");
            const titleEle = document.querySelector(".form-title");
            const incrementBtn = document.getElementById("incrementBtn");
            const decrementBtn = document.getElementById("decrementBtn");
            const yesButton = document.getElementById("yesButton");
            const noButton = document.getElementById("noButton");

            yesButton.innerHTML = data.buttonYes;
            noButton.innerHTML = data.buttonNo;

            if (data.style == "block") {
                buttonEle.innerHTML = data.button;

                if (data.title !== null && data.title !== undefined && data.title !== "") {
                    titleEle.style.display = "block";
                    inputEle.setAttribute('placeholder', data.placeholder);
                    inputNumberEle.setAttribute('placeholder', data.placeholder);
                    titleEle.innerHTML = data.title;
                } else {
                    titleEle.style.display = "none";
                    inputEle.setAttribute('placeholder', data.placeholder);
                    inputNumberEle.setAttribute('placeholder', data.placeholder);
                    titleEle.innerHTML = inputEle.getAttribute('placeholder');
                }

                inputEle.value = data?.attributes?.value ?? "";  // Default value ""
                inputNumberEle.value = data?.attributes?.value ?? 0;  // Default value 0

                for (const key in data?.attributes) {
                    inputEle.setAttribute(`${key}`, `${data.attributes[key]}`);
                }

                if (data.inputType === "number") {
                    datatype = "number";
                    inputNumberEle.style.display = "block";
                    yesButton.style.display = "none";
                    noButton.style.display = "none";
                    inputEle.style.display = "none";
                    buttonEle.style.display = "block";
                    incrementBtn.style.display = "block";
                    decrementBtn.style.display = "block";
                } else if (data.inputType == "confirm") {
                    datatype = "confirm";
                    inputNumberEle.style.display = "none";
                    inputEle.style.display = "none";
                    incrementBtn.style.display = "none";
                    decrementBtn.style.display = "none";
                    buttonEle.style.display = "none";
                    yesButton.style.display = "inline-block";
                    noButton.style.display = "inline-block";
                } else if (data.inputType == "text") {
                    datatype = "text";
                    inputNumberEle.style.display = "none";
                    inputEle.style.display = "inline-block";
                    yesButton.style.display = "none";
                    noButton.style.display = "none";
                    buttonEle.style.display = "block";
                    incrementBtn.style.display = "none";
                    decrementBtn.style.display = "none";
                }
            }

            $("#inputUser").focus();
        }
    });

    document.onkeyup = function (data) {
        var keyCode = data ? (data.which ? data.which : data.keyCode) : 0;
        if (keyCode == 27) {
            inputActive = false;
            hideModal();
            $.post(
                `https://cdo_inputs/inputClosed`,
                JSON.stringify({
                    input: "close",
                })
            );
        }
    };

    $("#noButton").click(function () {
        inputActive = false;
        hideModal();
        $.post(
            `https://cdo_inputs/inputConfirm`,
            JSON.stringify({
                input: "close",
            })
        );
    });

    $("#yesButton").click(function () {
        inputActive = false;
        hideModal();
        $.post(
            `https://cdo_inputs/inputConfirm`,
            JSON.stringify({
                input: "yes",
            })
        );
    });

    $("#notButton").click(function () {
        inputActive = false;
        hideModal();
        $.post(
            `https://cdo_inputs/inputClosed`,
            JSON.stringify({
                input: "close",
            })
        );
    });

    $("#formInputs").submit(function (event) {
        inputActive = false;
        if (datatype == "number") {
            $.post(
                `https://cdo_inputs/inputSubmitted`,
                JSON.stringify({
                    input: Number($("#inputUserNumber").val())
                })
            );

        } else {
            $.post(
                `https://cdo_inputs/inputSubmitted`,
                JSON.stringify({
                    input: $("#inputUser").val()
                })
            );
        }
    });

    $("#inputUser").on("input", function () {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";

        const loginDark = document.querySelector('.login-dark');
        loginDark.style.height = 'auto';
        loginDark.style.height = loginDark.scrollHeight + 'px';
    });

    $("#incrementBtn").click(function () {
        let value = parseInt($("#inputUserNumber").val(), 10);
        if (!isNaN(value)) {
            $("#inputUserNumber").val(value + 1);
        }
    });

    $("#decrementBtn").click(function () {
        let value = parseInt($("#inputUserNumber").val(), 10);
        if (!isNaN(value)) {
            $("#inputUserNumber").val(value - 1);
        }
    });

    $("#inputUserNumber").on("keypress", function (event) {
        // Permitir números (0-9) y un solo punto decimal
        if ($("#inputUserNumber").attr("type") === "number") {
            // Obtiene el carácter que se presionó
            const charCode = event.which;
            const charStr = String.fromCharCode(charCode);

            // Verifica si el carácter es un número o un punto decimal
            if (!/[\d.]/.test(charStr)) {
                event.preventDefault();
            }

            // Evita más de un punto decimal
            if (charStr === '.' && $(this).val().includes('.')) {
                event.preventDefault();
            }
        }
    });
});
