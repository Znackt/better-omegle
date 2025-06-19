import { useRef } from "react";
import { Button } from "../components/Button";

import { CrossIcon } from "../icons/CrossIcon";


import { useNavigate } from "react-router-dom";
import { InputBox } from "../components/InputBox";

const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const redirect_login = () => {
        navigate("/signin");
    }

    const Landing_page = () => {
        navigate("/")
    }

    return (
        <div className="h-screen w-screen flex bg-gray-800 justify-center items-center">
            <div className="bg-white rounded-xl border min-w-lg min-h-9/12 relative">
                <div className="absolute top-4 left-4">
                    <CrossIcon size="lg" onClick={Landing_page} className="cursor-pointer"/>
                </div>
                <div className="flex flex-col items-center px-8 py-16">
                    <div className="w-full max-w-md flex flex-col items-center">
                        <div className="text-4xl font-semibold mb-4 text-center">
                            Create your account
                        </div>
                        <div className="space-y-1 flex flex-col gap-3">
                            <InputBox placeholder="Username" size="md" reference={usernameRef} />
                            <InputBox placeholder="Email" size="md" reference={emailRef} />

                            <div className="flex flex-col pl-2 w-full">
                                <span className="text-lg font-semibold text-left mt-4">
                                    Create a Password
                                </span>
                                <span className="text-xs font-medium text-left">
                                    Tips to create a strong Password: <br />
                                    <ul className="list-disc list-inside">
                                        <li>At least 8 characters long</li>
                                        <li>Include uppercase and lowercase letters</li>
                                        <li>Use numbers and symbols</li>
                                        <li>Avoid common words or phrases</li>
                                    </ul>
                                </span>
                            </div>

                            <InputBox placeholder="Password" size="lg" reference={passwordRef} />
                            <div className="pt-2 flex justify-center">
                                <Button
                                    variant="primary"
                                    text="Submit"
                                    size="lg"
                                    className="rounded-full"
                                    
                                />
                            </div>

                            <div className="w-full text-left pl-3 pt-5">
                                <span className="text-sm font-medium opacity-95">
                                    Already have an account?{" "}
                                    <span className=" text-blue-800 hover:text-blue-600 duration-150 cursor-pointer" onClick={redirect_login}>
                                        Login
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Signup;
