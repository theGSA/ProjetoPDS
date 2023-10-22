

async function ImportHtml(elementId ,htmlPath)
{
    //const el = document.querySelector('#'+elementId);
    fetch(htmlPath)
    .then(t => t.text())
    .then(t =>{
        const a = document.createElement('div');
        a.innerHTML = t;
        console.log(a)
        elementId.appendChild(a);// = t;
    })
    .catch(err=>{
        console.log(err);
    })
}