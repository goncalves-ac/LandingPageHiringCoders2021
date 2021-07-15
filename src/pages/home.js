import React, { useState } from 'react';
import logo from '../img/logo.png';
import '../style/App.css';

/** Import dos Componentes */

function App() {

    const [count, setCount] = useState(0);

    function iniciaModal (modalID) {
        const modal = document.getElementById(modalID);
        if (modal) {
            modal.classList.add('openModal');
            modal.addEventListener('click', (e) => {
                if (e.target.id === modalID || e.target.className === 'closeModal') {
                    modal.classList.remove('openModal');
                }
            })
        }
    }

    return (
        <div className="App">
            <header className="App-header-left">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <header className="App-header-right">
                <section class="flex-center flex-column text-n-input">
                    <h2><span class="black-friday-text">BLACK FRIDAY É NA</span><br /> <span class="anastore-text">ANASTORE</span></h2>
                    <p>PRODUTOS EM OFERTA COM DESCONTOS <br />DE ATÉ <span class="discount-text">70%</span> EM TODA A LOJA</p>
                    <div class = "caixa" >
                        <h3 class="CTA-text">SE INSCREVA NA NOSSA <span class="newsletter-text">NEWSLETTER</span> <br />E RECEBA UMA NOTIFICAÇÃO ASSIM QUE AS PROMOÇÕES COMEÇAREM</h3>
                    </div>
                    <div class="input-wrapper">
                        
                        <input id="emailInput" type="email" onChange={e => setCount(e.target.value.length)} placeholder="Digite seu E-mail..." />
                        <button id="subscribeBtn" disabled={ count === 0 ? true : false } onClick={() => iniciaModal('IDdoModal')}>INSCREVER</button>
                       
                    </div>
                    <p id="mesage-display"></p>
                    <a href={0} rel="noopener noreferrer">SEGUIR PARA A LOJA</a>
                </section>
            </header>

            
            <div className="modalContainer" id="IDdoModal">
                <div className="modalTxt">
                    <button className="closeModal"> &times; </button>
                    <div className='modalCenter modal-content'>
                        <h2>INSCRIÇÃO CONCLUÍDA!</h2>
                        <hr />
                        <p><span>Parabéns</span>, sua inscrição em nossa Newsletter foi concluída com sucesso, e assim que nossas
                            promoções de <span>BLACK FRIDAY</span> estiverem em vigor você receberá uma mensagem no E-mail cadastrado!
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default App;
