import cls from './LiveContacts.module.css';
import { ImWhatsapp } from 'react-icons/im';

const LiveContacts = () =>{ 
    return (
        <div className={cls.root}>
            <a data-bs-toggle="tooltip" data-bs-placement="top" title="Связяться с нами" href='https://api.whatsapp.com/send?phone=996990980980'><ImWhatsapp /></a>
        </div>
    )
}

export default LiveContacts;