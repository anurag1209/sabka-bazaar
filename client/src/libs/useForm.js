// import { useState } from "react";

// export default function useForm(initial = {}) {
//     const [inputs, setInput] = useState(initial);

//     function handleChange(event) {
//         let { value, name } = event.target;
//         setInput({
//             ...inputs,
//             [name]: value
//         })
//     }

//     return {
//         inputs,
//         handleChange
//     }
// }

export const validateInput = (userData, existingUsers) => {
    let validityObj = { valid: true, errorMessage: "" }; 
    if (existingUsers && userData) {
      for(let i=0; i<existingUsers.data.length; i++) {
        if (existingUsers.data[i]?.email === userData.email) {
            validityObj = { valid: false, errorMessage: "Email already exists" }; 
            break;
        }
      }
    }

    return validityObj;
}

export const saveUser = (userData, existingUsers) => {
  let usersObj;
  if(existingUsers && existingUsers.data.length) {
    let updatedArr = existingUsers.data.concat(userData);
    usersObj = { data: updatedArr };
  } else {
    usersObj = {data: new Array(userData) };
  }
  localStorage.setItem("users", JSON.stringify(usersObj));
}