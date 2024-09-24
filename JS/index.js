// card - 1 start

document.getElementById('donate-money').addEventListener('click',
    function(event){
       event.preventDefault();

const addMoney = parseFloat(document.getElementById('input-add-money').value);

const balance = parseFloat(document.getElementById('account-balance').innerText);

const donateBlance = parseFloat(document.getElementById('donate-balance').innerText);

let newBalance 

 if(isNaN(addMoney )){
         newBalance = balance;
         alert('Invalid Input');
 }
 else{
        if(addMoney <= balance){
                newBalance = balance- addMoney;
                document.getElementById('account-balance').innerText = newBalance;
                const newDonateBalance = donateBlance + addMoney;
                document.getElementById('donate-balance').innerText = newDonateBalance;
               
                document.getElementById("my_modal_1").showModal();
        }
        else{
                alert('Please Enter a Vaild Number.');
               
        }     
 }
});
// card - 1  end

// card - 2 start

document.getElementById('donate-money2').addEventListener('click',
        function(event){
           event.preventDefault();
    
    const addMoney = parseFloat(document.getElementById('input-add-money2').value);
    
    const balance = parseFloat(document.getElementById('account-balance').innerText);
    
    const donateBlance = parseFloat(document.getElementById('donate-balance2').innerText);
    
    let newBalance 
    
     if(isNaN(addMoney )){
             newBalance = balance;
             alert('Invalid Input');
     }
     else{
            if(addMoney <= balance){
                    newBalance = balance- addMoney;
                    document.getElementById('account-balance').innerText = newBalance;
                    const newDonateBalance = donateBlance + addMoney;
                    document.getElementById('donate-balance2').innerText = newDonateBalance;
                   
                    document.getElementById("my_modal_1").showModal();
            }
            else{
                    alert('Please Enter a Vaild Number.');
                   
            }     
     }
    });
    // card - 2  end


// card - 3 start

document.getElementById('donate-money3').addEventListener('click',
        function(event){
           event.preventDefault();
    
    const addMoney = parseFloat(document.getElementById('input-add-money3').value);
    
    const balance = parseFloat(document.getElementById('account-balance').innerText);
    
    const donateBlance = parseFloat(document.getElementById('donate-balance3').innerText);
    
    let newBalance 
    
     if(isNaN(addMoney )){
             newBalance = balance;
             alert('Invalid Input');
     }
     else{
            if(addMoney <= balance){
                    newBalance = balance- addMoney;
                    document.getElementById('account-balance').innerText = newBalance;
                    const newDonateBalance = donateBlance + addMoney;
                    document.getElementById('donate-balance3').innerText = newDonateBalance;
                   
                    document.getElementById("my_modal_1").showModal();
            }
            else{
                    alert('Please Enter a Vaild Number.');
                   
            }     
     }
    });
    // card - 3  end    

function showDonationById(id){
        // document.getElementById('show-donation-btn').classList.add('hidden');
        // document.getElementById('show-history-btn').classList.add('hidden');
        document.getElementById('section').classList.add('hidden');
        document.getElementById('section-2').classList.add('hidden');
        document.getElementById('section-3').classList.add('hidden');

        document.getElementById(id).classList.remove('hidden');
        document.getElementById(id).classList.remove('hidden');
};


// hiatory button click and enter to history list
document.getElementById('show-history-btn')
.addEventListener('click', function(){
    console.log('show donation');
    showDonationById('donation-history');

});



// blog button and home button start

// blog-btn
document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href="blog.html";
    
});

// home-btn
document.getElementById('btn-home').addEventListener('click', function(){
    window.location.href="index.html";
    
});
// blog button and home button End


