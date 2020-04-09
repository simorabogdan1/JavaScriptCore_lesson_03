var x=-12;
if(x>0) {alert('1')} 
   else if(x<0){alert('-1')}
   else{alert('0')};


var login='Bob',  password='tyr';

if (login == 'Admin'){
    if (password == 'TheMaster'){
        alert('Welcome!')
    }else if (password == 'Cancel'){
        alert('Canceled.')
    }else {
        alert('Wrong password')
    }
}
else if (login == 'Cancel'){
    alert('Canceled.')
}else {
    alert("I don't know you")
}
switch(login){
    case ('Admin'):{
        switch(password){
            case ('TheMaster'):{
                alert('Welcome!')
                break;
            }case ('Cancel'):{
                alert('Canceled.')
                break;
            }default: alert('Wrong password')
                break;
        }
    }break;
    case ('Cancel'):{
        alert('Canceled.')
        break;
    }default: alert('I dont know you')
        break;
}

