import Header from '@/components/Header';
import { useRouter } from 'next/router';
import React from 'react'



function Success() {
    const router = useRouter();
    return (
        <div className='max-w-screen text-center'>
            <Header />


            <div className="bg-gray-300 ">
                <main className="bg-white mx-auto">
                    <div className="text-3xl my-3">
                        Your order has been confirmed!
                    </div>
                    <div>
                        Thank you for your order. We value our customer. Please contact us if you find anything wrong! Thanks again!
                    </div>
                    <button onClick={()=> router.push('/')} className="button">Go to Home</button>



                </main>
            </div>

        </div>
    )
}

export default Success;
