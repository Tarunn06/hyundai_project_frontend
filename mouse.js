var body=document.body;

    document.addEventListener('mousemove',(e)=>{
        var elem=document.createElement('div');
        elem.setAttribute('class','trail')
        elem.setAttribute('style',`left: ${e.clientX - 10}px; top: ${e.clientY - 10}px;`);

        elem.onanimationed=()=>{
            elem.remove();
        }
        body.insertAdjacentElement('beforeend',elem);
    })