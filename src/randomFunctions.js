export function calcCountForEachRate(comments) {
  const rates = [0, 0, 0, 0, 0];

  for (const comment of comments) {
    const rate = Math.ceil(comment.rating);

    if (rate >= 1 && rate <= 5) {
      rates[rate - 1]++;
    }
  }

  return rates;
}

// Email Validation
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

// Password Validation
function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,20}$/;

  return passwordRegex.test(password);
}

// Sign Up Validation
export function SignUpValidation(
  setSignFormData,
  inputsList,
  // setCheckBoxError,
) {
  // Get Form Data
  const fullName = inputsList[0].data.trim();
  const email = inputsList[1].data.trim();
  const password = inputsList[2].data;
  const confirmPassword = inputsList[3].data;
  const confirmPhoneNumber = inputsList[4].data;
  const confirmImage = inputsList[5].data;

  // Create Updated Form Data
  const updatedFormData = inputsList.map((field) => ({
    ...field,
    flag: false,
    errorMsg: "",
    arbErrorMsg: "",
  }));

  // Full Name Validation
  if (!fullName) {
    updatedFormData[0].flag = true;
    updatedFormData[0].errorMsg = "This Field Is Required";
    updatedFormData[0].arbErrorMsg = "هذا الحقل مطلوب";
  } else if (fullName.length > 150) {
    updatedFormData[0].flag = true;
    updatedFormData[0].errorMsg =
      "Your Name Is Too Long (Maximum 150 Characters)";
    updatedFormData[0].arbErrorMsg = "الاسم طويل جدًا (الحد الأقصى 150 حرفًا)";
  }

  // Email Validation
  if (!email) {
    updatedFormData[1].flag = true;
    updatedFormData[1].errorMsg = "This Field Is Required";
    updatedFormData[1].arbErrorMsg = "هذا الحقل مطلوب";
  } else if (email.length > 150) {
    updatedFormData[1].flag = true;
    updatedFormData[1].errorMsg =
      "Your Email Is Too Long (Maximum 150 Characters)";
    updatedFormData[1].arbErrorMsg =
      "البريد الإلكتروني طويل جدًا (الحد الأقصى 150 حرفًا)";
  } else if (!validateEmail(email)) {
    updatedFormData[1].flag = true;
    updatedFormData[1].errorMsg = "Please Enter A Valid Email Address";
    updatedFormData[1].arbErrorMsg = "يرجى إدخال بريد إلكتروني صحيح";
  }

  // Password Validation
  if (!password) {
    updatedFormData[2].flag = true;
    updatedFormData[2].errorMsg = "This Field Is Required";
    updatedFormData[2].arbErrorMsg = "هذا الحقل مطلوب";
  } else if (password.length < 8 || password.length > 20) {
    updatedFormData[2].flag = true;
    updatedFormData[2].errorMsg =
      "Password Should Be Between 8 & 20 Characters";
    updatedFormData[2].arbErrorMsg =
      "يجب أن تتراوح كلمة المرور بين 8 و20 حرفًا";
  } else if (!validatePassword(password)) {
    updatedFormData[2].flag = true;
    updatedFormData[2].errorMsg =
      "Password Must Include Lowercase, Uppercase, Number, And Special Character";
    updatedFormData[2].arbErrorMsg =
      "يجب أن تحتوي كلمة المرور على حرف صغير وحرف كبير ورقم ورمز خاص";
  }

  // Confirm Password Validation
  if (!confirmPassword) {
    updatedFormData[3].flag = true;
    updatedFormData[3].errorMsg = "This Field Is Required";
    updatedFormData[3].arbErrorMsg = "هذا الحقل مطلوب";
  } else if (confirmPassword !== password) {
    updatedFormData[3].flag = true;
    updatedFormData[3].errorMsg = "Passwords Do Not Match";
    updatedFormData[3].arbErrorMsg = "كلمتا المرور غير متطابقتين";
  }

  // Phone Number Validation
  if (!confirmPhoneNumber) {
    updatedFormData[4].flag = true;
    updatedFormData[4].errorMsg = "This Field Is Required";
    updatedFormData[4].arbErrorMsg = "هذا الحقل مطلوب";
  }

  // Image Validation
  if (!confirmImage) {
    updatedFormData[5].flag = true;
    updatedFormData[5].errorMsg = "This Field Is Required";
    updatedFormData[5].arbErrorMsg = "هذا الحقل مطلوب";
  }

  // Checkbox Validation
  // if (!checkBox) {
  //   setCheckBoxError("You Must Agree To The Terms And Conditions");
  // } else {
  //   setCheckBoxError("");
  // }

  // Update Form State
  setSignFormData(updatedFormData);

  // Check If Form Is Valid
  const isValid = updatedFormData.every((field) => !field.flag);

  return isValid;
}

// Sign In Validation
export function SignInValidation(setSignFormData, inputsList) {
  // Get Form Data
  const email = inputsList[0].data.trim();
  const password = inputsList[1].data;

  // Create Updated Form Data
  const updatedFormData = inputsList.map((field) => ({
    ...field,
    flag: false,
    errorMsg: "",
    arbErrorMsg: "",
  }));

  // Email Validation
  if (!email) {
    updatedFormData[0].flag = true;
    updatedFormData[0].errorMsg = "This Field Is Required";
    updatedFormData[0].arbErrorMsg = "هذا الحقل مطلوب";
  } else if (!validateEmail(email)) {
    updatedFormData[0].flag = true;
    updatedFormData[0].errorMsg = "Please Enter A Valid Email Address";
    updatedFormData[0].arbErrorMsg = "يرجى إدخال بريد إلكتروني صحيح";
  }

  // Password Validation
  if (!password) {
    updatedFormData[1].flag = true;
    updatedFormData[1].errorMsg = "This Field Is Required";
    updatedFormData[1].arbErrorMsg = "هذا الحقل مطلوب";
  }

  const isValid = updatedFormData.every((field) => !field.flag);
  let isUserExist = false;

  if (isValid) {
    // Post To Database
    isUserExist = true;
  }

  // Update Form State
  setSignFormData(updatedFormData);

  return isUserExist;
}
