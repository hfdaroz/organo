import './Rodape.css';
import fb from '../../imagens/fb.png';
import tw from '../../imagens/tw.png';
import ig from '../../imagens/ig.png';
import logo from '../../imagens/logo.png';

const Rodape = () => {
    return (
        <div className='container'>
            <div className='midias'>
                <img src={ig} alt='Instagram' />
                <img src={fb} alt='Facebook' />
                <img src={tw} alt='Twitter' />
            </div>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
            <div>
                <h1>
                    Desenvolvido por Alura.
                </h1>
            </div>
        </div>
    )
}

export default Rodape;
