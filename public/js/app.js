
const contactForm =document.querySelector('.contact-formm');

let namee=document.getElementById('name');
let email=document.getElementById('email');
let subject=document.getElementById('subject');
let telno=document.getElementById('telno');
let mesaj=document.getElementById('message');
contactForm.addEventListener('submit',(e)=>{
    e.preventDefault(); 
    
    let formData={
        namee:namee.value,
        email:email.value,
        subject:subject.value,
        telno:telno.value,
        mesaj:mesaj.value
    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload =function(){
        console.log(xhr.responseText);
        if(xhr.responseText ='success')
        {
            alert('Email sent');
            namee.value='';
            email.value='';
            subject.value='';
            telno.value='';
            mesaj.value='';
        }
        else{
            alert("Something went wrong");
        }
    }
    console.log(formData)
    console.log('formDataaa')
    xhr.send(JSON.stringify(formData));
    
})