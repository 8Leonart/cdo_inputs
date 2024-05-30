RegisterNetEvent('vorp_inputs:getInput')
AddEventHandler('vorp_inputs:getInput', function(title, placeholder, buttonLabel, callback)
    inputCallback = callback
    OpenInputModal(placeholder, buttonLabel, title)
end)

RegisterNetEvent('vorpinputs:getInput')
AddEventHandler('vorpinputs:getInput', function(buttonLabel, placeholder, callback)
    inputCallback = callback
    OpenInputModal(placeholder, buttonLabel)
end)

RegisterNetEvent('vorpinputs:getInputsWithInputType')
AddEventHandler('vorpinputs:getInputsWithInputType', function(buttonLabel, placeholder, type, callback)
    inputCallback = callback
    OpenInputModalWithNumberInput(placeholder, buttonLabel)
end)

RegisterNetEvent('vorpinputs:getConfirmingInput')
AddEventHandler('vorpinputs:getConfirmingInput', function(title, buttonYesLabel, buttonNoLabel, callback)
    inputCallback = callback
    OpenConfirmationModal(buttonYesLabel, buttonNoLabel, title)
end)