let subscribeSuccessful = false;
const apiEndpoint = "https://prod-22.francecentral.logic.azure.com/workflows/9b3146f0929248a9b7805d6502afb0e7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=xX9PZaldmGAj9cXaDx2vbJ9LwkqFTvfIWlqC8ZX1FIg";

const messagesContainer = document.getElementById('messages');
const submitButton = document.getElementById('submit-email-button');

function subscribe() {
    if (subscribeSuccessful) {
        return;
    }
    const el = document.getElementById('email-input');
    const email = el.value;
    if (!email) return;
    loading();
    fetch(apiEndpoint, {
        "headers": {"content-type": "application/json",},
        "body": JSON.stringify({email}),
        "method": "POST"
    })
        .then(success)
        .catch(error);
}

function loading() {
    messagesContainer.classList.remove('error');
    submitButton.classList.add('loading');
}

function success(res) {
    if (res.status < 200 || res.status >= 299) {
        error();
        return;
    }

    subscribeSuccessful = true;

    submitButton.innerText = "Thank you for your interest! ✓";
    messagesContainer.innerText = '';
    messagesContainer.classList.remove('error');
    submitButton.classList.add('loading-done');
    submitButton.classList.remove('loading');
}

function error() {
    messagesContainer.innerText = "Something went wrong.";
    messagesContainer.classList.add('error');
    submitButton.classList.remove('loading');
}
