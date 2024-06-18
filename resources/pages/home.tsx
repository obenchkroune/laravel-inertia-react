import { usePage } from '@inertiajs/react';
import { route } from 'momentum-trail';

export default function Home() {
    const { user } = usePage().props;
    console.log(user?.name);
    return (
        <div>
            <h1 className='text-2xl'>Home</h1>
            <p>Hello world!!</p>
        </div>
    );
}
