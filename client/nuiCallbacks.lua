RegisterNUICallback('inputSubmitted', function(data, cb)
    focusNui(false)
    if inputCallback then
        local userInput = data.input
        inputCallback(userInput)
        inputCallback = nil
    end
    cb('ok')
end)

RegisterNUICallback('inputConfirm', function(data, cb)
    focusNui(false)
    if inputCallback then
        local userInput = data.input
        if (userInput == "yes") then
            inputCallback(true)
        else
            inputCallback(false)
        end
        inputCallback = nil
    end
    cb('ok')
end)

RegisterNUICallback('inputClosed', function(data, cb)
    focusNui(false)
    if inputCallback then
        inputCallback("close")
        inputCallback = nil
    end
    cb('ok')
end)
