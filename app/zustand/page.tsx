"use client"
import BackToHome from "@/Components/BackToHome";
import { useUserStore } from "@/Stores/users";
import { SubmitHandler, useForm } from "react-hook-form";

type formFields = {
    name: string;
    email: string;
    age: number;
    profession: string;
    password: string;
}

export default function Zustand() {
    const { users, addUser } = useUserStore()
    const { register, handleSubmit, reset, formState: {
        errors,
        isSubmitting
    } } = useForm<formFields>()
    const onSubmit: SubmitHandler<formFields> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        addUser(data)
        reset()
    }
    return <>
        <BackToHome />
        <div className="flex p-12 flex-wrap">
            {users.map(user => {
                return <div className="border rounded p-6 m-2">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                    <p>{user.age}</p>
                    <p>{user.profession}</p>
                </div>
            })}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 border flex flex-col gap-4 p-4 rounded mx-auto mt-4">
            <p>REACT hook form with zustand state management</p>
            <div className="relative w-full">
                <input className="bg-transparent border w-full rounded h-9 text-white px-4" {...register("name", {
                    required: 'Username Required',
                    validate: (val) => {
                        if (!(val.length > 2)) {
                            return 'Username atleast have 3 characters'
                        }
                    }
                })} type="text" placeholder="username" />
                {errors.name && <div className="px-2 absolute left-1 top-[-8px] bg-black text-[11px] text-red-700 font-semibold">{errors.name.message}</div>}
            </div>
            <div className="relative w-full">
                <input className="bg-transparent border w-full rounded h-9 text-white px-4" {...register("password", {
                    required: 'Password Required',
                    validate: (val) => {
                        if (!(val.length > 7)) {
                            return 'Password atleast have 8 characters'
                        }
                    }
                })} type="text" placeholder="Password" />
                {errors.password && <div className="px-2 absolute left-1 top-[-8px] bg-black text-[11px] text-red-700 font-semibold">{errors.password.message}</div>}
            </div>
            <div className="relative w-full">
                <input className="bg-transparent border w-full rounded h-9 text-white px-4" {...register("email", {
                    required: 'Email Required',
                    validate: (val) => {
                        if (!(val.length > 9)) {
                            return 'Invalid Email'
                        }
                        if (!val.includes('@')) {
                            return 'Invalid Email'
                        }
                    }
                })} type="text" placeholder="email" />
                {errors.email && <div className="px-2 absolute left-1 top-[-8px] bg-black text-[11px] text-red-700 font-semibold">{errors.email.message}</div>}
            </div>
            <div className="relative w-full">
                <input className="bg-transparent border rounded w-full h-9 text-white px-4" {...register("age", {
                    required: 'Age Required',
                    validate: (val) => {
                        if (!(val > 17)) {
                            return 'Not Allowed'
                        }
                    }
                })} type="number" placeholder="age" />
                {errors.age && <div className="px-2 absolute left-1 top-[-8px] bg-black text-[11px] text-red-700 font-semibold">{errors.age.message}</div>}
            </div>
            <div className="relative w-full">
                <input className="bg-transparent border rounded  w-full h-9 text-white px-4" {...register("profession", {
                    required: 'Profession Required'
                })} type="text" placeholder="profession" />
                {errors.profession && <div className="px-2 absolute left-1 top-[-8px] bg-black text-[11px] text-red-700 font-semibold">{errors.profession.message}</div>}
            </div>
            <button disabled={isSubmitting} className="bg-green-700 h-9 rounded text-white">{isSubmitting ? "Submitting" : "Submit"}</button>
        </form>
    </>
}