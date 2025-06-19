import { useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";


const Signin = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const redirect_signup = () => {
        navigate("/signup")
    }

    const Landing_page = () => {
        navigate("/")
    }

    return (
        <div className="h-screen w-screen flex flex-col bg-gray-800 justify-center items-center">
            <div className="bg-white rounded-xl border min-w-lg min-h-8/12 relative">
                <div className="absolute top-4 left-4">
                    <CrossIcon size="lg" onClick={Landing_page} className="cursor-pointer"/>
                </div>
                <div className="flex flex-col items-center px-8 py-16">
                    <div className="w-full max-w-md flex flex-col items-center">
                        <div className="text-4xl font-semibold text-left mb-8">
                            Welcome back!
                        </div>
                        <div className="flex flex-col w-full gap-2 px-8">
                            <InputBox
                                placeholder="Email"
                                size="md"
                                classname="mt-1"
                                reference={emailRef}
                            />
                            <InputBox
                                placeholder="Password"
                                size="md"
                                classname="mt-1"
                                reference={passwordRef}
                            />
                        </div>

                        <div className="pt-6 flex justify-center mt-2">
                            <Button
                                variant="primary"
                                text="Login"
                                size="lg"
                                className="rounded-full py-3.5"
                                
                            />
                        </div>
                        <div className="pt-5 flex justify-center">
                            <Button
                                variant="tertiary"
                                text="Forgot Password?"
                                size="semi_lg"
                                className="rounded-full hover:bg-purple-100"
                            />
                        </div>

                        <div className="w-full text-left pl-8 pt-20">
                            <span className="text-sm font-medium opacity-95">
                                Don't have an account?{" "}
                                <span className=" text-blue-800 hover:text-blue-600 duration-150 cursor-pointer" onClick={redirect_signup}>
                                    Sign up
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Signin
