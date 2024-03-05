let apiKey = "Get API Key from https://httpsms.com/settings";

fetch('https://api.httpsms.com/v1/messages/send', {
    method: 'POST',
    headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "content": "This is a sample text message",
        "from": "+18005550199",
        "to": "+18005550100"
    })
})
    .then(res => res.json())
    .then((data) => console.log(data));