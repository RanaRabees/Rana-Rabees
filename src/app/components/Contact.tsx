// /* eslint-disable jsx-a11y/alt-text */
// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */
// "use client";
// import { useState } from "react";
// import { db, usersTable } from "../../lib/drizzle"
// // import toast, { Toaster } from 'react-hot-toast';
// import Link from "next/link"

// type users = {
//     email: string;
//     password: string;
// };

// const Contact = () => {
//     const [users, setUsers] = useState<users>({
//         email: "",
//         password: "",
//     });
//     const onChange = (e: any) => {
//         setUsers({ ...users, [e.target.name]: e.target.value });
//     };
//     const onClickAdd = async () => {
//         // toast("Thanks! Now you can got our notifications!");
//         alert("Thanks! Now you can got our notifications!");
//         const response = await fetch("/api/users", {
//             method: "POST",
//             body: JSON.stringify(users),
//         });
//     };

//     return (
//         <>
//             <section id="contact" className="animation-delay-1 animate-fadeIn">
//                 <div className="relative lg:py-[130px] md:py-[100px] py-[50px]">
//                     <div className="flex-col items-center justify-between lg:pl-10 mt-0 mr-auto mb-0 ml-auto w-full xl:px-5 lg:flex-row">
//                         <div className="w-full lg:flex-row">
//                             <h1 className="text-center font-bold text-4xl">
//                                 Contact
//                                 <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
//                             </h1>
//                             <h1 className="text-center text-2xl font-bold mb-16">
//                                 Want to get in touch? You can Join Us below.
//                             </h1>
//                             <div className="relative z-10 lg:mt-0 mt-20 lg:max-w-4xl md:max-w-4xl max-w-6xl">
//                                 <div className="flex flex-col items-center justify-center p-5 bg-white shadow-2xl rounded-xl relative z-10">
//                                     <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Get in Touch</p>
//                                     {/* <div className="w-full mt-6 relative space-y-8"> */}
//                                     {/* <div className="relative"> */}
//                                     {/* <input placeholder="ranaverse@gmail.com" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" /> */}
//                                     {/* </div> */}
//                                     {/* <div className="relative"> */}
//                                     {/* <input placeholder="*pa$$w0rd*" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" /> */}
//                                     {/* </div> */}
//                                     {/* <div className="relative"> */}
//                                     {/* <Link href="#" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</Link> */}
//                                     {/* </div> */}
//                                     <form className="w-full mt-6 relative space-y-8">
//                                         <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600">Email</p>
//                                         <input
//                                             required
//                                             type="email"
//                                             name="email"
//                                             value={users.email}
//                                             onChange={onChange}
//                                             placeholder="rrabeeshussain@gmail.com"
//                                             className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />
//                                         <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600">Password</p>
//                                         <input
//                                             required
//                                             type="password"
//                                             name="password"
//                                             onChange={onChange}
//                                             placeholder="pa$$w0rd"
//                                             value={users.password}
//                                             className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md" />

//                                         <button className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease" onClick={onClickAdd}>
//                                             Join
//                                         </button>
//                                         {/* <Toaster /> */}
//                                     </form>
//                                     {/* </div> */}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }
// export default Contact






"use client";
import { useState } from "react";
import { db, todoTable } from "../../lib/drizzle"

type todo = {
    title: string;
    description: string;
};

const Contact = () => {
    const [todo, setTodo] = useState<todo>({
        title: "",
        description: "",
    });

    const onChange = (e: any) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };

    const onClickAdd = async () => {
        alert("Thanks! Now you can got our notifications!");
        const response = await fetch("/api/todo", {
            method: "POST",
            body: JSON.stringify(todo),
        });
    };

    return (
        <section id="contact" className="animation-delay-1 animate-fadeIn">
            <form className="flex flex-col justify-center py-2">
                <input
                    required
                    className="p-3 mb-6 text-xl font-bold hover:italic hover:border-blue-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg"
                    name="title"
                    placeholder="Todo Title"
                    value={todo.title}
                    onChange={onChange}
                />
                <input
                    required
                    className="p-3 mb-6 text-xl font-bold hover:italic hover:border-pink-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg"
                    name="description"
                    placeholder="Todo Description"
                    value={todo.description}
                    onChange={onChange}
                />
                <button type="submit" className="p-3 mb-[22px] text-white hover:text-red-500 bg-gray-800 hover:bg-gray-950 text-xl font-bold hover:italic hover:border-green-500 border-2 focus:border-8 transition-all hover:rounded-lg rounded-md focus:rounded-xl focus:shadow-2xl hover:shadow-xl shadow-lg" onClick={onClickAdd}>
                    Add Todo
                </button>
            </form>
        </section>
    );
};

export default Contact;
