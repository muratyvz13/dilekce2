    const express = require('express');
const app =express(); 
const nodemailer = require('nodemailer');
const PORT =process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.json())
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')  
})
app.post('/',(req,res)=>{ 
    console.log(req.body);
 

    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: 'dilekcesite@gmail.com',
            pass: 'adjdhbqogzlzasig'
        }
    })
    const mailOptions = {
        from: req.body.email,
        to:'dilekcesite@gmail.com',
        subject:'Message from ',
        text:'gonderici mail: '+req.body.email+'\ngonderici isim: '+req.body.namee+'\nTelefon numarası: '+req.body.telno+'\n Mesaj:'+req.body.mesaj
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        console.log('Eqqqq ');
        if(error)
        {
            console.log(error);
            res.send('error');
        }
        else{  
            console.log('Email sent: '+info.response);
            res.send('success')
        }
    })
})
app.listen(PORT,()=>{
    console.log('Server running on ${PORT}')
})