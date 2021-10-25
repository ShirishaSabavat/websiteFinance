fetch("https://financeapp.koushilmankali.com/all-agents").then(agentdata => {
    return agentdata.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})