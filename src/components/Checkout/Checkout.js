import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import auth from '../../firebase/firebase.init';

const services = [
    {
        id: 0,
        balance: 129,
        name: "PORTRAIT"
    },
    {
        id: 1,
        balance: 329,
        name: "GROUP SHOTS"
    },
    {
        id: 2,
        balance: 629,
        name: "WEDDING"
    }
];

const Checkout = () => {

    const { id } = useParams();

    const service = services.find(service => service.id === Number(id));

    const [user] = useAuthState(auth);

    const handleCheckout = e => {
        e.preventDefault();
        toast.success('Thank you for the booking', { id: 'booking' })
    }

    return (
        <div className='card mx-auto my-5 p-md-5 p-4 shadow form'>
            <h1 className='fw-normal text-center mb-4'>Checkout</h1>
            <form onSubmit={handleCheckout}>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="email">Email:</label>
                    <input className='form-control fs-5' type="email" defaultValue={user && user.email} name='email' />
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="price">Package:</label>
                    <input readOnly value={service.name} className='form-control fs-5' type="text" name='package' />
                </div>
                <div className="mb-4">
                    <label className='form-label fs-5' htmlFor="price">Price:</label>
                    <input readOnly value={service.balance} className='form-control fs-5' type="text" name='price' />
                </div>
                <input className='btn w-100 btn-lg fs-4' type="submit" value="Confirm" />
            </form>
        </div>
    );
};

export default Checkout;