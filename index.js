// INDEX.JS

let btn = document.querySelector('button');

let clear_button = document.querySelector('.clear');


btn.addEventListener('click', function (){


    let name = document.querySelector('#name').value;
    let shoe = document.querySelector('#shoe').value;
    let birth = document.querySelector('#birth').value;
    let current = document.querySelector('#current').value;
    let nothing = ""

    let shoesize = shoe + "00"; 

    let shoe_birth = shoesize - birth
    let birthcurrent = parseFloat(shoe_birth) + parseFloat(current);

    if (name == nothing && shoe == nothing && birth == nothing && current == nothing) {
        document.querySelector('p').innerHTML = 'Please Enter Your Full Details';
        document.querySelector('p').style.color = 'red';
        document.querySelector('p').style.fontFamily = 'sans-serif';
    }

    else if (name == nothing) {
        document.querySelector('p').innerHTML = 'Please Enter Your Name';
        document.querySelector('p').style.color = 'red';
        document.querySelector('p').style.fontFamily = 'sans-serif';
    }

    else if (shoe == nothing) {
        document.querySelector('p').innerHTML = 'Please Enter Your Shoe Size';
        document.querySelector('p').style.color = 'red';
        document.querySelector('p').style.fontFamily = 'sans-serif';
    }

    else if (birth == nothing) {
        document.querySelector('p').innerHTML = 'Please Enter Your Birth Year';
        document.querySelector('p').style.color = 'red';
        document.querySelector('p').style.fontFamily = 'sans-serif';
    }

    else if (current == nothing) {
        document.querySelector('p').innerHTML = 'Please Enter Current Year';
        document.querySelector('p').style.color = 'red';
        document.querySelector('p').style.fontFamily = 'sans-serif';
    }

    else if (name.value && shoe.value && birth.value && current.value) {
        btn.style.display = 'none';
        
    }



    else{
        // document.querySelector('.result').innerHTML = ``;
        document.querySelector('p').innerHTML = `last two digit is your age <br> ${name} your Age is ${birthcurrent}`;
        document.querySelector('p').style.textAlign = 'center';
        document.querySelector('p').style.color = 'black';
        document.querySelector('p').style.fontFamily = 'sans-serif';
        document.querySelector('p').style.textTransform = 'uppercase';
    }    

    clear_button.style.display = 'block';
    
})

let allinput = document.querySelectorAll('input')

clear_button.addEventListener('click', () => {
    allinput.forEach(input => input.value = '')
    document.querySelector('p').innerHTML = "";
    
    location.reload();
})