// async 
async function loadJson(url) {
    let response = await fetch(url);
        if (response.status == 200) {
            let json = await response.json();
            return json;
        } 
            throw new Error(response.status)
        }


loadJson('no-such-user.json')
    .catch(alert);


// 2

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
} 

function f() {

    let resultPromise = wait ();
    

    resultPromise.then(result => {
        alert(result);
    })
    // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
}

f();