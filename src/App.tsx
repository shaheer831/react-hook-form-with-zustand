import { useUserStore } from "./Stores/userStore";
import { SubmitHandler, useForm } from "react-hook-form";

type formFields = {
  name: string;
  email: string;
  age: number;
  profession: string;
  password: string;
  gender: string;
}

const App = () => {
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
    <div className="flex p-12 flex-wrap">
      {users.length === 0 && <h1>Add User through form below 👇</h1>}
      {users.map(user => {
        return <div className="border rounded p-6 m-2">
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.password}</p>
          <p>{user.age}</p>
          <p>{user.profession}</p>
          <p>{user.gender}</p>
        </div>
      })}
    </div>
    <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 border border-[#cacaca] flex flex-col gap-3 p-4 rounded mx-auto mt-4">
      <p>REACT hook form with zustand state management</p>
      <div className="relative w-full">
        <input className="bg-transparent border outline-none w-full rounded h-9 px-4" {...register("name", {
          required: 'Username Required',
          validate: (val) => {
            if (!(val.length > 2)) {
              return 'Username atleast have 3 characters'
            }
          }
        })} type="text" placeholder="username" />
        {errors.name && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.name.message}</div>}
      </div>
      <div className="relative w-full">
        <input
          className="bg-transparent border outline-none w-full rounded h-9 px-4"
          {...register("password", {
            required: 'Password is required',
            validate: (val) => {
              if (val.length < 8) {
                return 'Password must be at least 8 characters long';
              }
              if (!/[A-Z]/.test(val)) {
                return 'Password must include at least one uppercase letter';
              }
              if (!/[a-z]/.test(val)) {
                return 'Password must include at least one lowercase letter';
              }
              if (!/[0-9]/.test(val)) {
                return 'Password must include at least one number';
              }
              if (!/[^A-Za-z0-9]/.test(val)) {
                return 'Password must include at least one special character';
              }
            }
          })}
          type="password"
          placeholder="Password"
          aria-invalid={!!errors.password}
        />
        {errors.password && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.password.message}</div>}
      </div>
      <div className="relative w-full">
        <input
          className="bg-transparent outline-none border w-full rounded h-9 px-4"
          {...register("email", {
            required: 'Email is required',
            validate: (val) => {
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (val.length <= 9) {
                return 'Email Invalid';
              }
              if (!emailRegex.test(val)) {
                return 'Invalid email format';
              }
            }
          })}
          type="text"
          placeholder="Email"
          aria-invalid={!!errors.email}
        />
        {errors.email && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.email.message}</div>}
      </div>
      <div className="relative w-full">
        <input className="bg-transparent outline-none border rounded w-full h-9 px-4" {...register("age", {
          required: 'Age Required',
          validate: (val) => {
            if (!(val > 17)) {
              return 'Kids Not Allowed'
            }
            if (val > 100) {
              return 'are you fucking crazy '
            }

          }
        })} type="number" placeholder="age" />
        {errors.age && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.age.message}</div>}
      </div>
      <div className="relative w-full">
        <select
          className="bg-transparent outline-none border rounded w-full h-9 px-4"
          {...register("gender", { required: 'Please select your gender' })}
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.gender.message}</div>}
      </div>
      <div className="relative w-full">
        <input className="bg-transparent border rounded outline-none w-full h-9 px-4" {...register("profession", {
          required: 'Profession Required'
        })} type="text" placeholder="profession" />
        {errors.profession && <div className="px-2 absolute left-2 top-[-8px] bg-white text-[12px] text-red-700 font-semibold">{errors.profession.message}</div>}
      </div>
      <button disabled={isSubmitting} className={`bg-black h-10 rounded text-white ${isSubmitting && 'bg-[#303030]'}`}>{isSubmitting ? "Submitting..." : "Submit"}</button>
    </form>
  </>
};

export default App;
