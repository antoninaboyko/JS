import React, {useState} from "react";

//2
function App () {

    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const [isNameValid, setIsNameValid] = useState(false);
    const [isLoginValid, setIsLoginValid] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);

    const [wasNameTouched, setWasNameTouched] = useState(false);
    const [wasLoginTouched, setWasLoginTouched] = useState(false);
    const [wasAgeTouched, setWasAgeTouched] = useState(false);
    const [wasEmailTouched, setWasEmailTouched] = useState(false);


    const nameLostFocus = () => {
      setWasNameTouched(true)
      if(name.trim().length > 1 && !/\d/.test(name)){
        setIsNameValid(false);
        return
      }
      setIsNameValid(true);
    }
  
    const loginLostFocus = () => {
      setWasLoginTouched(true);
      if(login.trim().length > 5){
        setIsLoginValid(false);
        return
      }
      setIsLoginValid(true);
    }

    const ageLostFocus = () => {
      setWasAgeTouched(true);
      if(age >= 18){
        setIsAgeValid(false);
        return
      }
      setIsAgeValid(true);
    }

    const emailLostFocus = () => {
      setWasEmailTouched(true)
      if (/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        setIsEmailValid(false);
        return
      }
      setIsEmailValid(true);
    }
  
  
  
    const submit = (e) => {
      e.preventDefault();
  
      setWasNameTouched(true);
      setWasEmailTouched(true);

      if(name.trim().length > 1 && !/\d/.test(name)){
        setIsNameValid(false);
      } else {
        setIsNameValid (true);
      }
      
      if(login.trim().length > 5) {
        setIsLoginValid(false);
      } else {
        setIsLoginValid(true);
      }
      
      if(age >= 18) {
        setIsAgeValid(false);
      } else {
        setIsAgeValid(true);
      }
     
      
      if (/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
        setIsEmailValid(false);
      } else {
        setIsEmailValid(true);
      }
      console.log(name, login, age, email);
    }


    const nameChange = e => setName(e.target.value);
    const loginChange = e => setLogin(e.target.value);
    const ageChange = e => setAge(e.target.value);
    const emailChange = e => setEmail(e.target.value);



return (
<div className="wrapper">
  <form onSubmit={submit}>
    <label>Name</label>
    <input onInput={nameChange} onBlur={nameLostFocus} className={isNameValid && wasNameTouched ? "invalid" : ""} />
    {isNameValid && wasNameTouched && <p>Enter correct name</p>}
    <label>Login</label>
    <input onInput = {loginChange} onBlur={loginLostFocus} className={isLoginValid && wasLoginTouched ? "invalid" : ""} />
    {isLoginValid && wasLoginTouched && <p>Enter correct login</p>}
    <label>Age</label>
    <input type="number" onInput = {ageChange} onBlur={ageLostFocus} className={isAgeValid && wasAgeTouched ? "invalid" : ""} />
    {isAgeValid && wasAgeTouched && <p>Enter correct age</p>}
    <label>Email</label>
    <input onInput = {emailChange} onBlur={emailLostFocus} className={isEmailValid && wasEmailTouched ? "invalid" : ""} />
    {isEmailValid && wasEmailTouched && <p>Enter correct email</p>}
    <button type="submit">Sign in</button>
  </form>
</div>
);
} 

export default App;

//3
// import {Formik, Form, Field} from 'formik';


// function App () {

//   const validateName = (value) =>{
//     if(!value){
//       return 'Required'
//     } else if (/\d/.test(value)) {
//       return 'Invalid name'
//     } else if (value.trim().length < 2) {
//       return 'Invalid name'
//     }
//    }

//    const validateLogin = (value) => {
//     if (!value){
//       return 'Required'
//     } else if (value.trim().length < 5) {
//       return 'Invalid login'
//     }
//    }

//    const validateAge = (value) => {
//     if (!value) {
//       return ' Required'
//     } else if (value < 18) {
//       return 'Invalid age'
//     }
//    }
  
//     const validateEmail = (value) =>{
//     if(!value){
//       return 'Required'
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
//       return 'Invalid email address'
//     }
//    }

   
//     return (
//   <div className="wrapper">
  
//       <Formik
//         initialValues={{
//           name: '', 
//           login: '',
//           age: '',
//           email: ''
//         }}
//         onSubmit={values => {console.log(values)}}
//         >
//           {({errors, touched}) => (
//             <Form>
//               <label>Name</label>
//               <Field name="name" validate={validateName} className={errors.name && touched.name ? "invalid" : ""}/>
//               {errors.name && touched.name && <p>{errors.name}</p>}

//               <label>Login</label>
//               <Field name="login" validate={validateLogin} className={errors.login && touched.login ? "invalid" : ""}/>
//               {errors.login && touched.login && <p>{errors.login}</p>}

//               <label>Age</label>
//               <Field name="age" type = 'number' validate = {validateAge} className={errors.age && touched.age ? "invalid" : ""}/>
//               {errors.age && touched.age && <p>{errors.age}</p>}

//               <label>Email</label>
//               <Field name="email" validate={validateEmail} className={errors.email && touched.email ? "invalid" : ""}/>
//               {errors.email && touched.email && <p>{errors.email}</p>}

//               <button type="submit">Sign in</button>
//             </Form>
//           )}
//         </Formik>
  
//     </div>)}

//   export default App;



//4 
// import { useForm } from "react-hook-form";

// function App () {

//   const {
//     register, 
//     formState: {errors},
//     handleSubmit,
//     reset
//   } = useForm({mode: "onTouched"})

//   const submit = (value) => {
//     console.log(value)
//     reset();
//   }

//   return (
//     <div className="wrapper">
//       <form onSubmit={handleSubmit(submit)}>
//       <label>Name</label>
//         <input {...register('name',{
//               required: "Required",
//               minLength: {
//               value: 2,
//               message: "Minimum 2 characters"},
//             pattern:{
//               value: /^\D*$/,
//               message: "Invalid name"
//             }})} 
//         className={errors.name ? "invalid" : ""}/>
//         {errors.name && <p>{errors.name.message}</p>}

//         <label>Login</label>
//         <input { ...register('login',{
//           required: 'Required',
//           minLength: {
//             value: 5,
//             message: "Minimum 5 characters"
//           }})}
//           className ={errors.login ? 'invalid' : ""}/>
//           {errors.login && <p>{errors.login.message}</p>}
          
//         <label>Age</label>
//         <input { ...register('age', {
//           required: 'Required',
//           min: {
//             value: 18,
//             message: "Invalid age"
//           }
//           })}
//           type = "number"
//           className={errors.age ? "invalid" : ""}/>
//           {errors.age && <p>{errors.age.message}</p>}

//           <label>Email</label>
//           <input {...register('email',{
//               required: "Required",
//               pattern: {
//                 value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                 message: "Invalid email address"
//             }
//           })}
//           className={errors.email ? "invalid" : ""}/>
//         {errors.email && <p>{errors.email.message}</p>}

//         <button type="submit">Sign in</button>
//       </form>
//     </div>
//     )
//   }


//   export default App;