let leftArrow = document.querySelector('#slider').querySelectorAll('i')[1];
let rightArrow = document.querySelector('#slider').querySelectorAll('i')[0];

leftArrow.addEventListener('click',()=>{
    let arr=[]
    document.querySelector('#slider').querySelectorAll('img').forEach((x)=>{
        arr.push(x)
    })
    arr.push(arr.shift())
    document.querySelector('#slider').querySelector('article').innerHTML = ''
    arr.forEach((x)=>{
        document.querySelector('#slider').querySelector('article').appendChild(x)
    })
})

rightArrow.addEventListener('click',()=>{
    let arr=[]
    document.querySelector('#slider').querySelectorAll('img').forEach((x)=>{
        arr.push(x)
    })
    let temp = arr[arr.length-1];
    arr.pop();
    arr.unshift(temp);
    document.querySelector('#slider').querySelector('article').innerHTML = ''
    arr.forEach((x)=>{
        document.querySelector('#slider').querySelector('article').appendChild(x)
    })
})

if(window.outerWidth>800){
    document.querySelector('#slider').querySelectorAll('img').forEach((x)=>{
        x.addEventListener('click',()=>{
                x.style = 'transform:scale(1.1);height:600px;position:fixed;'
        })
    })
}

if(window.innerWidth > 557){
    document.querySelector('nav').classList.add('overflow');
}

if(window.innerWidth <= 557){
    document.querySelector('nav').classList.remove('overflow');
}



document.querySelector('#haha').addEventListener('click',()=>{
    document.querySelector('#slider').querySelectorAll('img').forEach((x)=>{
            x.style = ''
    })
})

document.addEventListener('keydown',(e)=>{
    if(e.key == 'Escape'){
        console.log(e.key)
        document.querySelector('#slider').querySelectorAll('img').forEach((x)=>{
            x.style = ''
        })
    }
})

document.querySelector('.fa-angle-double-down').addEventListener('click',(e)=>{
    document.querySelector('#sec3').scrollIntoView({behavior:'smooth'})
    document.querySelector('.fa-angle-double-down').classList.add('hidden')
})

let arr = document.querySelector('nav').querySelectorAll('div')
for(let i=1;i<arr.length;i++){
    if(i==1){
        arr[i].addEventListener('click',()=>{
            document.querySelector('#sec3').scrollIntoView({behavior:'smooth'})
        })
    }
    if(i==2){
        arr[i].addEventListener('click',()=>{
            document.querySelector('#sec2').scrollIntoView({behavior:'smooth'})
        })
    }
}

document.querySelector('body').addEventListener('scroll',()=>{
    if(document.querySelector('#sec1').getBoundingClientRect().top < 0){
        document.querySelector('.fa-angle-double-down').classList.add('hidden');
    }
    else{
        document.querySelector('.fa-angle-double-down').classList.remove('hidden')
    }
})

document.querySelector('#now').addEventListener('click',()=>{
    document.querySelector('#sec2').scrollIntoView({behavior:'smooth'})
})

document.querySelector('#links').querySelectorAll('div').forEach((x,i)=>{
    if(i==0){
        x.addEventListener('click',()=>{
            document.querySelector('#sec1').scrollIntoView({behavior:'smooth'})
        })
    }
    if(i==1){
        x.addEventListener('click',()=>{
            document.querySelector('#sec3').scrollIntoView({behavior:'smooth'})
        })
    }
    if(i==2){
        x.addEventListener('click',()=>{
            document.querySelector('#sec2').scrollIntoView({behavior:'smooth'})
        })
    }
})

document.querySelector('nav').querySelector('i').addEventListener('click',()=>{
    if(document.querySelector('nav').querySelectorAll('div')[0].style.display==''){
        document.querySelector('nav').querySelectorAll('div').forEach((x,i)=>{
            x.style='display:block!important;background-color:white;width:200px;border:1px solid gray;transform:translateX(-5.5vw);width:130px;'
        })
    }
    else{
        document.querySelector('nav').querySelectorAll('div').forEach((x)=>{
            x.style=''
        })
    }
})

window.addEventListener('resize',()=>{
    if(window.outerWidth>557){
        document.querySelector('nav').querySelectorAll('div').forEach((x)=>{
            x.style=''
        })
        document.querySelector('#sec3').querySelectorAll('p').forEach((x)=>{
            x.style=''
        })
    }
    else{
        document.querySelector('#sec3').querySelectorAll('div').forEach((x)=>{
            x.style=`height:${x.clientWidth}px`
        })
        setTimeout(()=>{
            document.querySelector('#sec3').querySelectorAll('p').forEach((x)=>{
                x.style=`width:${x.offsetHeight}px!Important`
            })
        },500)
    }
})
