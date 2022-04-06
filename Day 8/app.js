var form = document.querySelector('#form-control');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');


// function hiển thị error
function errorInput(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message; 
}


// function hiển thị success
function successInput(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}


// function kiểm tra input có trống hay không ?
function checkInputValue(listInput) {
    listInput.forEach(function(input) {
        if(input.value == '') {
            errorInput(input, 'Không được để trống');
        }else {
            successInput(input);
        }
        return false;
    });
}

// funciton kiểm tra độ dài input
function checkLengthInput(input, min, max) { 
    if(input.value.length < min) {
        errorInput(input, `Từ ${min} đến ${max} kí tự`);
        return true;
    }
    if(input.value.length > max) {
        errorInput(input, `Không được lớn hơn ${max} kí tự`);
        return true;
    }
    if(max < input.value.length > min) {
        successInput(input);
        return true;
    }
    return false;
}

// function check Email
function checkEmail(input) {
    let regex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(regex.test(input.value)) {
    successInput(input);
  }else {
      errorInput(input, `Không đúng định dạng email`);
  }
  return false;
}


//function check password trùng nhau
function checkConfirmPassword(password, cfPassword) {
    if(password.value !== cfPassword.value) {
        errorInput(cfPassword, `Mật khẩu không trùng khớp`)
        return true;
    }
    return false;
}





form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkInputValue([username, email, password, confirmPassword]);
    checkLengthInput(username, 6, 12);
    checkLengthInput(password, 6, 12);
    checkEmail(email);
    checkConfirmPassword(password, confirmPassword);
})



