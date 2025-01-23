'use client'
import React from 'react'
import GithubIcon from '/public/github-icon.svg'
import LinkdinIcon from '/public/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'



const Contact = () => {
    const sendHandler = async () => {
        // try {
        //     const res = await fetch(`/api/send`, {
    
        //         // Adding method type
        //         method: "POST",
                
        //         // Adding body or contents to send
        //         body: JSON.stringify({
        //             test: "test"
        //         })
        //     });
            
        //     const data = await res.json();
        //     console.log(data);
        // } catch (err) {
        //     console.log(err);
        // }
    }

  return (
    <section id='Contact' className='grid md:grid-cols-2 px-24 py-24 mx-3 rounded-t-lg gap-10 h-fit bg-gradient-to-tr from-[#858bff] to-[#4ADEDE]  '>
        <div className='max-w-[500px]'>
            <h3 className='text-5xl font-bold mb-2'>Let&apos;s Connect!</h3>

            <p className='text-[#d3d3d3] mb-4 mt-4 text-lg'>
                I&apos;m currently looking for new opportunities to connect with people. My inbox is always open, so feel free to reach out to me.
                Looking forward to getting in contact with you!
            </p>
            
            <div className='flex flex-row gap-4'>
                <Link href='https://github.com/Henry-H-W'>
                    <Image src={GithubIcon} alt='GitHub Icon'/>
                </Link>

                <Link href='https://www.linkedin.com/in/henry-wang-131b162aa/'>
                    <Image src={LinkdinIcon} alt='LinkedIn Icon'/>
                </Link>
            </div>
        </div>

        <div>
            <form className='flex flex-col gap-6'>
                <div className='mb-2'>
                    <label htmlFor='email' className='text-white block mb-2 text-m font-medium'>Email:</label>
                    <input 
                        type='email' 
                        id='email' 
                        required 
                        placeholder='johndoe@gmail.com' 
                        className='bg-[#18191E] border-2 border-[#d3dbff] placeholder-[#9CA2A9] rounded-lg   block w-full py-2 px-3'
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='subject' className='text-white block mb-2 text-m font-medium'>Subject:</label>
                    <input 
                        type='text' 
                        id='subject' 
                        required 
                        placeholder='Hello!' 
                        className='bg-[#18191E] border-2 border-[#d3dbff] placeholder-[#9CA2A9] rounded-lg   block w-full py-2 px-3'
                    />
                </div>
                <div className='mb-2'>
                    <label htmlFor='message' className='text-white block mb-2 text-m font-medium'>Message:</label>
                    <textarea 
                        name='message'
                        id='email' 
                        required 
                        placeholder="Hi Henry! Let's talk about..." 
                        className='bg-[#18191E] h-32 border-2 border-[#d3dbff] placeholder-[#9CA2A9] rounded-lg   block w-full py-2 px-3'
                    />
                </div>
                <button
                    type='submit'
                    onClick={sendHandler}
                    className='px-1 py-3 w-full rounded-lg ease-in-out bg-[#6448ff] mt-4 hover:bg-[#765eff] duration-100 text-white'
                >Send Message</button>

            </form>
        </div>

    </section>
  )
}

export default Contact