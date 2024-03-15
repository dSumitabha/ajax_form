const msgBox = document.getElementById('msgBox')
const userForm = document.getElementById('userForm')
const stateField = document.getElementById('state')
const fetchBtn = document.getElementById('fetchBtn')


stateField.addEventListener('click', populateStates)
userForm.addEventListener('submit', submitForm)
fetchBtn.addEventListener('click', fetchUsers)


function populateStates() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../controller/get_states.php', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            let states = JSON.parse(xhr.responseText);
            let select = document.getElementById('state')
            states.forEach(function(state) {
                let option = document.createElement('option');
                option.value = state.id;
                option.textContent = state.state_name;
                select.appendChild(option);
            });
        } else {
            console.log('Failed to fetch the table.');
        }
    };
    xhr.send();
}


function fetchUsers() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../controller/fetch_users.php', true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('userList').appendChild = xhr.responseText;
        } else {
            console.error('Error, Status code:', xhr.status);
        }
    };

    xhr.send();
}


function submitForm(e){
    e.preventDefault()
    
    if(validateForm()){
        let formData = new FormData(document.getElementById('userForm'))
    
        let xhr = new XMLHttpRequest()
        xhr.open('POST', 'controller/form_handler.php', true)
        xhr.send(formData)

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    msgBox.innerHTML = xhr.responseText
                    msgBox.className = 'success'
                    userForm.reset()
                } else {
                    msgBox.innerHTML = "⚠️ Error submitting form."
                    msgBox.className = 'danger'
                }
            }
        }
    }
}

function validateForm() {
    let name = document.getElementById('name').value;
    let mobile = document.getElementById('mobile').value;
    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    
    let nameRegex = /^[A-Za-z\s]+$/; 
    let mobileRegex = /^[0-9]{10}$/;
    let cityRegex = /^[A-Za-z\s]+$/; 
    
    if (!nameRegex.test(name)) {
        msgBox.innerHTML = "⚠️ Please enter a valid name."
        msgBox.className = "warning"
        return false;
    }
    
    if (!mobileRegex.test(mobile)) {
        msgBox.innerHTML= "⚠️ Please enter a valid 10-digit mobile number."
        msgBox.className = "warning"
        return false;
    }
    
    if (!cityRegex.test(city)) {
        msgBox.innerHTML = "⚠️ Please enter a valid city name."
        msgBox.className = "warning"
        return false;
    }

    return true;
}