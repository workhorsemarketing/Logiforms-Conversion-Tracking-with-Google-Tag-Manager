// Add this as a Logiforms "Action" under the Form General Settings => Actions

function(field,form){
    console.log('field', field);
    console.log('form',form);
    
    function getFormValues() {
        const formValues = {};
        const theForm = document.querySelector('.formContainer form');
        const inputs = theForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            formValues[input.name || input.id] = input.value;
        });
        return formValues;
    }
  
    function sendMessageToParent() {
        const formData = getFormValues();
        window.parent.postMessage({
            type: 'logiform_submission',
            data: formData
        }, '*');
    }
    
    form.eventMgr.addListener('beforesubmit', (event) => {
        sendMessageToParent();
      return true;
    });
    
  }