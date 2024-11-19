// import React from 'react'
import { useState } from "react";
import img from "../assets/Vehicle_IMG.png";
import { RiArrowLeftSLine } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onCheck = () => {
        setChecked(!checked);
    }
    const navigate = useNavigate();
    const APP_URI = import.meta.env.VITE_APP_URL;
    const token = JSON.parse(localStorage.getItem("token"));
    const submitForm = async (e) => {
        try {
            e.preventDefault();
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const res = await axios.post(`${APP_URI}/api/v1/login`, { email, password });
            if (res.data.success === true) {
                console.log("Login successful!");
                console.log(res.data);
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem("userId", JSON.stringify(res.data.userId));
                setEmail("");
                setPassword("");
                navigate("/home");
            } else {
                console.log("Login failed!");
                alert(res.data.message);
            }
        } catch (err) {
            console.log(`Error with form submission! ${err}`);
        }
    }
    return (
        <div className="h-screen w-full flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="h-full w-auto md:w-full p-4 md:p-10">
                <div className="flex flex-row items-center justify-start gap-x-2 text-secondary hover:cursor-pointer hover:text-tertiary">
                    <RiArrowLeftSLine />
                    <p className="font-[500] text-[14px]">Back</p>
                </div>
                <div className="w-[410px] flex flex-col items-center md:items-start justify-start mt-[30px] font-DMsans">
                    <h2 className="text-primary font-[700] text-[36px]">Sign In</h2>
                    <p className="text-secondary text-[16px]">Enter your email and password to sign in!</p>
                    <div className="flex items-center my-4 w-full text-secondary">
                        <hr className="flex-grow border-gray-300" />
                        <span className="mx-4 text-gray-500">or</span>
                        <hr className="flex-grow border-gray-300" />
                    </div>
                    <form onSubmit={submitForm} className="w-auto md:w-full">
                        <div className="w-full h-[77px] flex flex-col items-start justify-start gap-y-2">
                            <label className="after:" htmlFor="Email">Email <span className="text-primary">*</span></label>
                            <input className="w-full rounded-[16px] border-[1px] h-[50px] p-4
                            " type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="mail@simmmmple.com" required />
                        </div>
                        <div className="w-full h-[77px] flex flex-col items-start justify-start  my-6 gap-y-2">
                            <label htmlFor="Email">Password <span className="text-primary">*</span></label>
                            <input className="w-full rounded-[16px] border-[1px] h-[50px] p-4
                            " type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min. 8 characters" required />
                        </div>
                        <div className="w-auto md:w-full h-[77px] flex justify-between items-center my-6 gap-y-2">
                            <span className="flex flex-row items-center justify-center">
                                <input
                                    onClick={onCheck}
                                    className={`mr-2 h-[18px] w-[20px] rounded border-2 ${checked ? "bg-primary border-primary" : "border-gray-300"
                                        }`}
                                    type="checkbox"
                                    name="check"
                                    id="check"
                                />
                                <p className="text-tertiary">Keep me Logged In.</p>
                            </span>
                            <span className="text-primary font-[500]">Forget Password?</span>
                        </div>
                        <button type="submit" className="h-[54px] py-[10px] px-8 w-full bg-primary hover:bg-tertiary rounded-lg text-secondary font-[700] text-[14px]">Sign In</button>
                    </form>
                    <p className="text-tertiary text-[16px] my-4">Not registered yet? <span className="text-primary font-[400]">Create an Account</span></p>
                </div>
            </div>
            <div className="hidden md:visible md:h-full rounded-bl-[100px] md:w-full md:flex flex-col items-center justify-center gap-16 p-4 md:p-10 bg-primary text-[#FFFFFF]">
                <div className="w-auto md:w-full flex flex-row items-center justify-center">
                    <img className="w-[80px] h-[83px] mr-8" src={img} alt="Img_alt" />
                    <button className="w-[319px] h-[85px] border-[3.8px] ml-8 cursor-default rounded-[18px] text-[50px] font-[400]">Spark</button>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 rounded-[26px] h-[134px] w-[471px] border-[1px] border-[#b7b3b3]">
                    <p className="font-Montserrat font-[400] text-[17px]">Learn more about Air Drive on</p>
                    <p className="font-[600] text-[29px]">spark.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Login;