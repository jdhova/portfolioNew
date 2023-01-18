import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFoundPAge = () => {
    let router = useRouter()
    useEffect(()=>{
        router.push("/")
    },[])
};

export default NotFoundPAge;
