import Form1 from "./Formularios/form1";
import Footer from "./componentes/Footer";

const footerStyle = {
  marginTop: '100px',
  textAlign: 'center',
  fontStyle: 'normal',
  bottom:'0',
  width:'100%',
  color: 'white',
  fontSize: '2em',
}
const aStyle ={
  
}

function App() {
  return (
    <div>
      <Form1 />
      <footer style={footerStyle}>Desenvolvido por <a href="https://giovanesantiago.netlify.app/" target="_blank">Giovane Santiago</a></footer>
    </div>
  );
}

export default App;
