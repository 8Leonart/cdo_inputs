RegisterCommand("testinput", function(source, args)
    local title = "ANY Title"
    local placeholder = "ANY PLACEHOLDER"
    local buttonLabel = "SEND"

    TriggerEvent("cdo_inputs:client:getInput", title, placeholder, buttonLabel, function(input)
        local userInput = input
        if userInput ~= "close" then
            print(input)
            print("Response:", userInput)
        else
            print("Close")
        end
    end)
end, false)

RegisterCommand("testnumberinput", function(source, args)
    local placeholder = "Put a number here"
    local buttonLabel = "Confirm"
    local tittle = "Number Input"

    TriggerEvent("cdo_inputs:client:getNumberInput", tittle, buttonLabel, placeholder, function(input)
        local userInput = tonumber(input)
        print(input)
        if userInput ~= "close" then
            print("Number:", userInput)
        else
            print("Close")
        end
    end)
end, false)

RegisterCommand("testconfirm", function(source, args)
    local title = "Are you sure?"
    local buttonYesLabel = "Yes"
    local buttonNoLabel = "No"

    TriggerEvent("cdo_inputs:client:getConfirmingInput", title, buttonYesLabel, buttonNoLabel, function(input)
        print(input)
        if input and input ~= "close" then
            print("Confirmed: Yes")
        else
            print("Confirmed: No")
        end
    end)
end, false)