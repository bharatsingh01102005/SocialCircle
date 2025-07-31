
import React, { useState } from 'react'
import logo from "../assets/logo2.png"
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
function SignUp() {
    const [inputClicked, setInputClicked] = useState({
        name: false,
        userName: false,
        email: false,
        password: false
    });

    const [showPassword, setShowPssword] = useState(false)

    return (

        <div className="w-full h-screen bg-gradient-to-b
        from-black to-gray-900 flex flex-col justify-center items-center">
            <div className="w-[90%] lg:max-w-[60%] h-[600px] bg-white rounded-2xl
            flex justify-center items-center overflow-hidden border-2 border-[#1a1f23]">
                <div className='w-full lg:w-[50%] h-full bg-white flex flex-col 
        items-center p-[10px] gap-[20px]'>

                    <div className='flex gap-[10px] items-center text-[20px] font-semibold mt-[40px]'>
                        <span>Sign Up to</span>
                        <img src={logo} alt="" className='w-[70px]' />
                    </div>
                    <div className='relative flex items-center justify-start w-[90%] h-[50px]
            rounded-2xl mt-[30px] border-2 border-black'onClick={() => setInputClicked({ ...inputClicked, name: true })}>
                        <label htmlFor='name' className={`text-gray-700 absolute left-[20px] p-[5px] bg-white text-[15px] ${inputClicked.name ? "top-[-15px]" : ""}`}>
                            Enter Your Name
                        </label>

                        <input type="text" id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0' required />

                    </div>
                    <div className='relative flex items-center justify-start w-[90%] h-[50px]
            rounded-2xl mt-[30px] border-2 border-black'onClick={() => setInputClicked({ ...inputClicked, userName: true })}>
                        <label htmlFor='userName' className={`text-gray-700 absolute left-[20px] p-[5px] bg-white text-[15px] ${inputClicked.userName ? "top-[-15px]" : ""}`}>
                            Enter Your UserName
                        </label>

                        <input type="text" id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0' required />

                    </div>
                    <div className='relative flex items-center justify-start w-[90%] h-[50px]
            rounded-2xl mt-[30px] border-2 border-black'onClick={() => setInputClicked({ ...inputClicked, email: true })}>
                        <label htmlFor='eamil' className={`text-gray-700 absolute left-[20px] p-[5px] bg-white text-[15px] ${inputClicked.email ? "top-[-15px]" : ""}`}>
                            Enter Email
                        </label>

                        <input type="email" id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0' required />

                    </div>
                    <div className='relative flex items-center justify-start w-[90%] h-[50px]
            rounded-2xl mt-[30px] border-2 border-black'onClick={() => setInputClicked({ ...inputClicked, password: true })}>
                        <label htmlFor='password' className={`text-gray-700 absolute left-[20px] p-[5px] bg-white text-[15px] ${inputClicked.password ? "top-[-15px]" : ""}`}>
                            Enter Password
                        </label>

                        <input type={showPassword ? "text" : "password"} id='name' className='w-[100%] h-[100%] rounded-2xl px-[20px] outline-none border-0' required />
                        const [showPassword, setShowPassword] = useState(false);
                        <input type={showPassword ? "text" : "password"} className="border p-2" />
                        {!showPassword ? (
                            <IoIosEye className="absolute right-5 w-6 h-6 cursor-pointer" onClick={() => setShowPassword(true)} />
                        ) : (
                            <IoIosEyeOff className="absolute right-5 w-6 h-6 cursor-pointer" onClick={() => setShowPassword(false)} />
                        )}




                    </div>

                </div>
                <div className='md:w-[50%] h-full hidden lg:flex justify-center items-center
        bg-[#000000] flex-col gap-[10px] text-white text-[16px] 
        font-semibold rounded-l-[30px] shadow-2xl shadow-black'>

                </div>

            </div>
        </div>


    )
}
export default SignUp