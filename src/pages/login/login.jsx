import { useState } from "react";
import "./login.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useState("");
    const navigate = useNavigate();


    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(email, password);

        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password
        }).then((res) => {
            toast.success("Login Success")
            const user = res.data.user
            localStorage.setItem("token", res.data.token)



            if (user.role === "admin") {
                navigate("/admin/")
            } else {
                navigate("/")
            }




        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
        })

    }


    return (

        <div className="bg-picture w-full h-screen  flex justify-center items-center">
            <form onSubmit={handleOnSubmit}>
                <div className="w-[700px] h-[400px] backdrop-blur-xl flex justify-center items-center flex-col relative  ">
                    <img src="logo.png" alt="logo" className="w-[200px] h=[200px]border-[3px] absolute top-1 " />
                    <input type="email" placeholder="Email" className=" w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={email}

                        onChange={
                            (e) => {
                                setEmail(e.target.value)
                            }
                        }




                    />



                    <input type="password" placeholder="Password" className=" mt-6 w-[300px] h-[30px] bg-transparent border-b-2 border-white text-white text-xl outline-none"
                        value={password}

                        onChange={
                            (e) => {
                                setPassword(e.target.value)
                            }
                        }


                    />
                    <button className="my-9 w-[300px] h-[50px] bg-slate-400 text-2xl text-white ">Login</button>

                </div>
            </form>


        </div>
    );
}