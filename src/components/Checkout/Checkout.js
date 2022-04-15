import React, { useState } from 'react';

const Checkout = () => {

    const [payment, setPayment] = useState(false);

    return (
        <div className='card w-50 mx-auto mt-5 p-5 shadow'>
            <h1 className='fw-normal text-center text-primary'>Pay for this Service</h1>
            <form>
                <div className="mb-3">
                    <label className='form-label fs-5' htmlFor="name">Name</label>
                    <input className='form-control fs-5' type="text" name='name' />
                </div>
                <div className="mb-3">
                    <label className='form-label fs-5' htmlFor="email">Email</label>
                    <input className='form-control fs-5' type="email" name='email' />
                </div>
                {
                    payment ?
                        <div className="mb-4">
                            <label className='form-label fs-5' htmlFor="Paypal">PayPal</label>
                            <input className='form-control fs-5' type="text" name='Paypal' />
                        </div> :
                        <div className="mb-4">
                            <label className='form-label fs-5' htmlFor="creditCard">Credit Card</label>
                            <input className='form-control fs-5' type="text" name='creditCard' />
                        </div>
                }
                <p className='text-primary'>Change payment method click the button below</p>
                <div class="mb-4 form-check ps-0">
                    <input onChange={e => setPayment(e.target.checked)} type="checkbox" className="form-check-input d-none" id="exampleCheck1" />
                    <label className="form-check-label btn btn-primary" for="exampleCheck1">{payment ? 'PayPal' : 'Credit Card'}</label>
                </div>
                <input className='btn btn-primary w-100 btn-lg fs-4' type="submit" value="Confirm Payment" />
            </form>
        </div>
    );
};

export default Checkout;