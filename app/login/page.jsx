import React from "react";
import LoginForm from "@/components/LoginForm";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
const Login = async() =>{

    //  const session = await getServerSession(authOptions)
    //     if(session) redirect("/addnote")
    return(
        <div>
            <LoginForm/>
        </div>
    )
}

export default Login