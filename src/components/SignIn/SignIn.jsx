import { useState } from 'react';
import BookingInput from '../UI/BookingInput/BookingInput';
import Button from '../UI/Button/Button';
import styles from './SignIn.module.scss'

const SignIn = ({hide}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invalidInput, setInvalidInput] = useState(false);

    const signInHandler = () => {
        if(email === '' || password === '') {
            setInvalidInput(true);
            setTimeout(() => setInvalidInput(false), 3000);
            return;
        }
        hide();
    }

    return (
        <div className={styles.sign_in}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Sign in
                </h2>
                <BookingInput 
                    invalid={invalidInput && email === ''}
                    type='text' 
                    label='Email address'
                    value={email}
                    setValue={setEmail}/>
                <BookingInput 
                    invalid={invalidInput && password === ''}
                    type='password' 
                    label='Password'
                    value={password}
                    setValue={setPassword}/>
                <Button 
                    style={{marginBottom: '1.5rem'}}
                    onClick={signInHandler}
                    >Sign in with Google</Button>
                <Button green 
                    style={{marginBottom: '1rem'}}
                    onClick={signInHandler}
                    >Sign in</Button>
                <p className={styles.text}>Create account</p>
                <div className={styles.close} 
                    onClick={hide}>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Menu / Close_LG">
                        <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                    </svg>
                </div>
            </div>    
        </div>
    );
};

export default SignIn;