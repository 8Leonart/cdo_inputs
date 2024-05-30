inputCallback = nil

function focusNui(status)
    SetNuiFocus(status, status)
end

function OpenInputModal(placeholder, buttonLabel,title)
    focusNui(true)
    if (not title) then
        title = placeholder
    end
    SendNuiMessage(json.encode({
        action = "ui",
        type = "enableinput",
        title = title,
        inputType = "text",
        style = "block",
        placeholder = placeholder,
        button = buttonLabel
    }))
end

function OpenInputModalWithNumberInput(placeholder, buttonLabel,title)
    focusNui(true)
    if (not title) then
        title = placeholder
    end
    SendNuiMessage(json.encode({
        action = "ui",
        type = "enableinput",
        inputType = "number",
        title = title,
        style = "block",
        placeholder = placeholder,
        button = buttonLabel,
        attributes = {
            value = 0
        }
    }))
end

function OpenConfirmationModal(buttonYesLabel, buttonNoLabel,title)
    focusNui(true)
    SendNuiMessage(json.encode({
        action = "ui",
        type = "enableinput",
        inputType = "confirm",
        title = title,
        style = "block",
        buttonYes = buttonYesLabel,
        buttonNo = buttonNoLabel
    }))
end

