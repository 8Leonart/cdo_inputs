RegisterNetEvent('cdo_inputs:client:getInput')
AddEventHandler('cdo_inputs:client:getInput', function(title, placeholder, buttonLabel, callback)
    inputCallback = callback
    OpenInputModal(placeholder, buttonLabel, title)
end)

RegisterNetEvent('cdo_inputs:client:getNumberInput')
AddEventHandler('cdo_inputs:client:getNumberInput', function(title, buttonLabel, placeholder, callback)
    inputCallback = callback
    OpenInputModalWithNumberInput(placeholder, buttonLabel,title)
end)

RegisterNetEvent('cdo_inputs:client:getConfirmingInput')
AddEventHandler('cdo_inputs:client:getConfirmingInput', function(title, buttonYesLabel, buttonNoLabel, callback)
    inputCallback = callback
    OpenConfirmationModal(buttonYesLabel, buttonNoLabel, title)
end)