const socket = io();

const btnName = document.querySelector('.btn-name');
const inputName = document.querySelector('.user-name input');
const userLabel = document.querySelector('.form-msg label');
const login = document.querySelector('.login');
const formMsg = document.querySelector('.form-msg');
const chat = document.querySelector('.chat');
const msg = document.getElementById('msg');


let userName= '';


btnName.addEventListener('click', ()=>{
    userName = inputName.value;
    userLabel.innerHTML = userName;
    login.style.display = "none";
});

formMsg.addEventListener('submit', (e)=>{
    e.preventDefault();
});

formMsg.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    socket.emit('send_msg', {name: userName, msg: msg.value})
    
    msg.value = '';
});
socket.on('new_msg', message => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p class="name">${message.name}</p>
    <p class="message">${message.msg}</p>`;
    chat.appendChild(li);
})
const btnSave = document.querySelector('.btn-save');

btnSave.addEventListener('click', async () => {
    const chatMessages = Array.from(document.querySelectorAll('.chat li p.message')).map(p => p.textContent);

    try {
        const response = await fetch('/save-chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ messages: chatMessages })
        });

        const data = await response.json();

        if (data.success) {
            console.log('Messages successfully saved');
        } else {
            console.log('Error saving messages:', data.error);
        }
    } catch (error) {
        console.error('Error saving messages:', error);
    }
});