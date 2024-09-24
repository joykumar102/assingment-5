document.getElementById('donate-money').addEventListener('click',
    function(event){
       event.preventDefault();

const addMoney = parseFloat(document.getElementById('input-add-money').value);

const balance = parseFloat(document.getElementById('account-balance').innerText);

const donateBlance = parseFloat(document.getElementById('donate-balance').innerText);

let newBalance 

// hiatory


        //  let newBalance = balance - addMoney;
//  document.getElementById('account-balance').innerText = newBalance;
//  const newDonateBalance = donateBlance + addMoney;
//  document.getElementById('donate-balance').innerText = newDonateBalance;

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

// function handelSelect(event){
//         console.log(event);
// }
function showDonationById(id){
        // document.getElementById('show-donation-btn').classList.add('hidden');
        // document.getElementById('show-history-btn').classList.add('hidden');
        document.getElementById('section').classList.add('hidden');
        document.getElementById('section-2').classList.add('hidden');
        document.getElementById('section-3').classList.add('hidden');

        document.getElementById(id).classList.remove('hidden');
        document.getElementById(id).classList.remove('hidden');
};

// modal
// document.getElementById('donate-money').addEventListener('click',function(){
//         window.location.reload('donate-money');
// });

// document.getElementById('show-history-btn').addEventListener('click', function()) {
//         this.classList.toggle('bg-red-500');
//         this.classList.toggle('bg-blue-500');
// }




// donation button
const historyDisplay = document.getElementById('donation-history');
historyDisplay.classList.remove('hidden');


// hiatory button click and enter to history list
document.getElementById('show-history-btn')
.addEventListener('click', function(){
    console.log('show donation');
    showDonationById('donation-history');

});



// const date = new Date();
//     const p1 = document.createElement('p');
//     p1.style.border='1px solid gray'
//     p1.style.borderRadius='10px'
//     p1.style.padding='8px'
//     p1.innerText=`${donateAmount} Taka is Donated for famine-2024 at Feni, Bangladesh.
//     ${date}`
//     document.getElementById('history-btn').appendChild(p1);


// blog button and home button

document.getElementById('btn-blog').addEventListener('click', function(){
    window.location.href="blog.html";
    
});

// blog-btn
document.getElementById('btn-home').addEventListener('click', function(){
    window.location.href="index.html";
    
});




    