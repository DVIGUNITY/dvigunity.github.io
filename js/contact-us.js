let subscribeSuccessful = false;
const apiEndpoint = "https://prod-21.francecentral.logic.azure.com:443/workflows/678fb790a12f4a8ba06c965818843ff7/triggers/When_an_HTTP_request_is_received/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2FWhen_an_HTTP_request_is_received%2Frun&sv=1.0&sig=spMGzDhMRL8NZyMEOfL3pLOo-LYwr8pVReljmZg4feE";

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
