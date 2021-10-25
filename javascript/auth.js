document.getElementById("login").addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("submited");
    const email = document.getElementById('email')
    const password = document.getElementById('password')
    fetch("https://financeapp.koushilmankali.com/login",{
        method: 'post',
        body: JSON.stringify({
            email:email,
            password:password
        }),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(data => console.log(data)).catch(err => console.log(err))
})


console.log("kk", document.getElementById("login"))