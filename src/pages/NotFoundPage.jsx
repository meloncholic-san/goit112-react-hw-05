import { Link } from 'react-router';

export default function NotFoundPage() {
    return (
        <div>
            <p>
                Movie is not Found! Please follow this{' '}
                <Link to="/">link</Link>
            </p>
        </div>
    );
}
