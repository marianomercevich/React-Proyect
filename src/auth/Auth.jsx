export default function name(params) {
    
    const [isLogin, setIsLogin] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [showVerificationCodeInput, setShowVerificationCodeInput] = useState(false);
    const [showThirdPopup, setShowThirdPopup] = useState(false);
    
    const handleInputChange1 = (e) => {
      setInput1(e.target.value);
    };
    
    const handleInputChange2 = (e) => {
      setInput2(e.target.value);
    };
    
    const handleInputChange3 = (e) => {
      setInput3(e.target.value);
    };
    
    const handleInputChange4 = (e) => {
      setInput4(e.target.value);
    };
    
    const handleVerificationCodeChange = (e) => {
      setVerificationCode(e.target.value);
    };
    
    const handleRegister = async () => {
      try {
        const response = await fetch('http://localhost:9000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: input2,
            // También puedes incluir otros campos necesarios para el registro
          }),
        });
    
        const data = await response.json();
        console.log('Register Response:', data);
    
        if (response.ok) {
          // Registro exitoso, mostrar campo de verificación
          setShowVerificationCodeInput(true);
        } else {
          // Mostrar mensaje de error en caso de falla en el registro
          showAlert(`Error en el registro: ${data.message}`);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        showAlert('Error en la solicitud. Inténtalo nuevamente más tarde.');
      }
    };
    
    const handleVerificationSubmit = async () => {
      try {
        const response = await fetch('http://localhost:9000/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: input2,
            token: verificationCode,
          }),
        });
    
        const data = await response.json();
        console.log('Verification Response:', data);
    
        if (response.ok) {
          // Verificación exitosa, actualiza la sesión en el servidor
          await fetch('http://localhost:9000/verify_login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: input2,
              token: verificationCode,
            }),
          });
    
          // Redirige al usuario a la página /acerca
          window.location.href = "/acerca";
          
          // Cierra el popup si es necesario
          onClose();
        } else {
          // Mostrar mensaje de error en caso de fallo en la verificación
          showAlert(`Error en la verificación: ${data.message}`);
        }
      } catch (error) {
        console.error('Error en la verificación:', error);
        showAlert('Error en la verificación. Inténtalo nuevamente más tarde.');
      }
    };
    
    const handleSubmit = async () => {
      try {
        const response = await fetch('http://localhost:9000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: input2,
          }),
        });
    
        const data = await response.json();
        console.log('Login Response:', data);
    
        if (response.ok) {
          setShowThirdPopup(true);
          // window.location.href = "/Acerca";  // Puedes redirigir o realizar otras acciones aquí
        } else {
          // Mostrar mensaje de error en caso de fallo en el inicio de sesión
          showAlert(`Error en el inicio de sesión: ${data.message}`);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
        showAlert('Error en la solicitud. Inténtalo nuevamente más tarde.');
      }
    };
    
    return(
        <>
        </>
    )
    
    }