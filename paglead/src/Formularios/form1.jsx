import React from "react";
import emailjs from 'emailjs-com'
import style from "../css/style.css"
import Footer from "../componentes/Footer";



class Form1 extends React.Component {
    constructor(pros) {
        super(pros)
        this.state = {
            nome: '',
            telefone: '',
            moto: '',
            obs: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleOnChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        this.setState({[name]: value})
    }

    handleSubmit(e) {
        /* const { nome , telefone, moto, obs } = this.state
        console.log( 'nome: ' + nome + ' telefone: ' + telefone + ' moto: ' + moto + 'Observação :' + obs) */
        e.preventDefault()
        emailjs.sendForm('gmailMessage', 'template_hnhhved', e.target, 'user_Ed3D1EkBH2vEa3111vafs')
            .then((result) => {
                console.log(result.text);
                window.location.href = "/env/enviado.html"
            }, (error) => {
                console.log(error.text);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form">
                <div className="title">Ola,</div>
                <div className="subtitle">Preencha os dados para solicitação:</div>
                <div className="input-container ic1">
                    <input name="nome" value={this.state.nome} onChange={this.handleOnChange} id="firsname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="firsname" className="placeholder">Nome</label>
                </div>
                <div className="input-container ic2">
                    <input name="telefone" value={this.state.telefone} onChange={this.handleOnChange} id="lastname" className="input" type="text" placeholder=" "/>
                    <div className="cut"></div>
                    <label htmlFor="lastname" className="placeholder">Telefone</label>
                </div>
                <div className="input-container ic2">
                    {/* <input name="moto" value={this.state.moto} onChange={this.handleOnChange} id="moto" className="input" type="text" placeholder=" "/> */}
                    <select name="moto" value={this.state.moto} onChange={this.handleOnChange} id="moto" className="input" placeholder=" ">
                        <option value="selected" ></option>
                        <option value="Meteor 350">Meteor 350</option>
                        <option value="Himalayan 411">Himalayan 411</option>
                        <option value="Interceptor 650 twin">Interceptor 650 twin</option>
                        <option value="Continetal 650 twin">Continetal 650 twin</option>
                    </select>
                    <div className="cut cut-short"></div>
                    <label htmlFor="moto" className="placeholder">Moto</label>
                </div>
                <div className="input-container ic2">
                    <input name="obs" value={this.state.obs} onChange={this.handleOnChange} id="obs" className="input" type="text" placeholder=" "/>
                    <div className="cut cut-short"></div>
                    <label htmlFor="obs" className="placeholder">Observações</label>
                </div>
                <button type="submit" className="submit">Enviar</button>
                
            </form>
        )
    }
}

export default Form1