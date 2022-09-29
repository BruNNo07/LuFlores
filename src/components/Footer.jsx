import { InstagramLogo } from 'phosphor-react'

export function Footer(){
    return(
        <footer className='bg-orange-300'>
            <strong>Contatos: </strong>
            <div className='flex justify-center items-center'>
                <InstagramLogo />
                <p><a href="https://instagram.com/"> Instagram</a></p>
            </div>
        </footer>
    )
}