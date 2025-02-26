import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';


function ContactMePopup({ setemailpopup, IBM_plex_mono }) {

    const [open, setopen] = useState(false)
    const [open1, setopen1] = useState(false)
    const [desc, setdesc] = useState('')
    const [error, seterror] = useState('')
    const [email, setemail] = useState('')
    const [status, setStatus] = useState("");
    const [loading, setloading] = useState(false)


    const [who, setwho] = useState('');
    const [want, setwant] = useState('');

    const whoyouare = [
        'I am a recruiter',
        'I am your friend',
        'I am your rival',
        'I am just a regular guy man',
        'I am a girl (rare event)',
        'I am from Akatsuki',
        'I am Nigerian prince (I need money)'
    ]

    const whatyouwant = [
        'I want to talk to you',
        'I want to hire you',
        'I want to challenge you for a duel',
        'I want to give you a suitcase full of money',
        'I want you to capture one person'
    ]

    useEffect(() => {
        setTimeout(() => {
            seterror('')

        }, 5000);
    }, [error])


    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (who != '' && want != '' && desc != '' && emailRegex.test(email)) {
            setloading(true)
            const form = document.createElement("form");

            // Create input fields and append them to the form
            const nameInput = document.createElement("input");
            nameInput.setAttribute("type", "hidden");
            nameInput.setAttribute("name", "who");
            nameInput.setAttribute("value", who);
            form.appendChild(nameInput);

            const nameInput1 = document.createElement("input");
            nameInput1.setAttribute("type", "hidden");
            nameInput1.setAttribute("name", "want");
            nameInput1.setAttribute("value", want);
            form.appendChild(nameInput1);

            const emailInput = document.createElement("input");
            emailInput.setAttribute("type", "hidden");
            emailInput.setAttribute("name", "reply_to");
            emailInput.setAttribute("value", email);
            form.appendChild(emailInput);

            const messageInput = document.createElement("textarea");
            messageInput.setAttribute("name", "message");
            messageInput.value = desc;
            form.appendChild(messageInput);


            emailjs.sendForm('service_irpopkc', 'template_d7v4blp', form, {
                publicKey: 'MMZz8U0pTqKpRdRJm',
            })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );

        }
        else if (who == '') {
            seterror("Please select 'who you are?'")
        }
        else if (want == '') {
            seterror("Please select 'what you want?'")

        }
        else if (!emailRegex.test(email)) {
            seterror('Please enter your email')

        }
        else if (desc == '') {
            seterror('Please write your message')


        }


    };

    return (
        <div className={`${IBM_plex_mono.className} z-50 fixed overflow-hidden  w-full h-full top-0 flex items-center justify-center `} >
            <div className='bg-black/50 absolute w-full h-full z-10' onClick={() => setemailpopup(false)}>

            </div>

            <div className='w-[51.3125rem] h-[35.75rem] bg-[#fff] font-medium text-[#303030] p-5 z-20' >

                <div className='flex items-center justify-between '>
                    <p className='text-[1.375rem]' >Email</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className='w-4 h-4 cursor-pointer' onClick={() => setemailpopup(false)}>
                        <path d="M16 1.61143L14.3886 0L8 6.38857L1.61143 0L0 1.61143L6.38857 8L0 14.3886L1.61143 16L8 9.61143L14.3886 16L16 14.3886L9.61143 8L16 1.61143Z" fill="#303030" />
                    </svg>

                </div>

                {error != '' ? <div className='text-[#C53D34] font-semibold text-[0.875rem]  flex items-center justify-center mt-2 -mb-6'>{error}</div> : null}

                <div className='mt-8 w-full relative z-20' >
                    <div className='grid grid-cols-2 gap-x-4'>
                        <div className={`${open ? ' border-t-[1px] border-l-[1px] border-r-[1px]  ' : ' border-[1px] '} text-[1rem]  relative z-30 px-4  bg-[#fff] h-10 flex items-center justify-between cursor-pointer w-full select-none space-x-2 ${error != '' && who == '' ? ' border-[#C53D34] text-[#C53D34]' : ''} `} onClick={() => {
                            setopen(!open)
                            setopen1(false)
                        }
                        }>
                            <p className={`${open ? 'text-[0.75rem] text-[#888888]' : ''} transition-all duration-250 truncate `}>{who != '' ? who : 'Who are you?'}
                            </p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" className='w-3 h-2'>
                                <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#303030" />
                            </svg>

                            {open ?
                                <ul className="dropdown_menu dropdown_menu-4 bg-[#fff]   text-[#303030]  border-b-[1px] border-l-[1px] border-r-[1px] z-30 ">
                                    {whoyouare.map((item, i) => {
                                        return (
                                            <li className={` dropdown_item-${i + 1} select-none`} onClick={() => setwho(item)}>{item}</li>
                                        )
                                    })}

                                </ul>
                                : null}
                        </div>

                        <div className={`${open1 ? ' border-t-[1px] border-l-[1px] border-r-[1px]  ' : ' border-[1px] '} text-[1rem]  relative z-20 px-4  bg-[#fff] h-10 flex items-center justify-between cursor-pointer w-full select-none space-x-2  ${error != '' && want == '' ? ' border-[#C53D34] text-[#C53D34]' : ''} `} onClick={() => {
                            setopen(false)
                            setopen1(!open1)
                        }}>
                            <p className={`${open1 ? 'text-[0.75rem] text-[#888888]' : ''} transition-all duration-250 truncate  `}> {want != '' ? want : 'What you want?'}
                            </p> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" fill="none" className='w-3 h-2 shrink-0'>
                                <path d="M1.41 0L6 4.58L10.59 0L12 1.41L6 7.41L0 1.41L1.41 0Z" fill="#303030" />
                            </svg>

                            {open1 ?
                                <ul className="dropdown_menu dropdown_menu-4 bg-[#fff] pb-2 text-[#303030]  border-b-[1px] border-l-[1px] border-r-[1px]  z-20">
                                    {whatyouwant.map((item, i) => {
                                        return (
                                            <li className={` dropdown_item-${i + 1} select-none`} onClick={() => setwant(item)}>{item}</li>
                                        )
                                    })}
                                </ul>
                                : null}
                        </div>
                    </div>

                    <input className={`border-[1px] w-full mt-5 h-10 px-4 outline-none ${error != '' && error.includes('email') ? ' border-[#C53D34] text-[#C53D34]' : ''} `} type="email" name="email" value={email} placeholder="Your Email" required onChange={(e) => setemail(e.target.value)} />
                    <textarea required className={`mt-5 relative border-[1px] h-[13rem] w-full outline-none px-4 py-3  z-10 resize-none ${error != '' && desc == '' ? ' border-[#C53D34] placeholder:text-[#C53D34] ' : ''} `} placeholder='What is it that you want to say...' onChange={(e) => setdesc(e.target.value)} value={desc}>

                    </textarea>

                    <div className='mt-5 flex items-center justify-center w-full' >
                        <button className='w-[32.5rem] bg-[#303030] text-[#fff] h-11  cursor-pointer flex items-center justify-center ' onClick={() => handleSubmit()}>
                            {loading ? <div className='w-6 h-6 rounded-[50%]  border-[#fff] border-l-[2px]  animate-spin' /> : 'SEND'}
                        </button>
                    </div>
                </div>
                <p className='text-[#888888] text-[0.875rem] text-center mt-7'>I usually respond back in 24-48 hours</p>
            </div>

        </div>
    )
}

export default ContactMePopup