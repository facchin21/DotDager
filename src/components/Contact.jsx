import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !subject || !message) {
            setError('Todos los campos son obligatorios');
            toast.error("Por favor, completa todos los campos.");
            return;
        }

        // Usar EmailJS para enviar el mensaje
        const templateParams = {
            from_email: email,
            subject: subject,
            message: message,
        };

        emailjs.send(
            'service_att8dae',
            'template_c9zdk0t', 
            templateParams,
            'mRmcya-sESKMRwvuv'
        )
            .then(
                (response) => {
                    console.log('Mensaje enviado exitosamente', response);
                    toast.success("¡Mensaje enviado exitosamente!");
                    // Limpiar los campos del formulario después de enviar
                    setEmail('');
                    setSubject('');
                    setMessage('');
                    setError('');
                },
                (error) => {
                    console.error('Hubo un error al enviar el mensaje', error);
                    toast.error("Hubo un error al enviar el mensaje. Intenta nuevamente.");
                }
            );
    };

    return (
        <>
            <section className="max-w-4xl mx-auto p-6 bg-dark-light rounded-xl shadow-lg flex flex-col items-center">
                <h1 className="text-4xl text-light mb-6 text-center">Contacto</h1>
                <p className="text-light-dark text-center mb-4">
                    Si te gustaría contactarme, no dudes en enviarme un mensaje👇
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 w-6/12">
                    <div>
                        <label className="block text-light mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-3 bg-dark-light text-light border border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-detail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-light mb-2" htmlFor="subject">Asunto</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="w-full p-3 bg-dark-light text-light border border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-detail"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-light mb-2" htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full p-3 bg-dark-light text-light border border-light rounded-xl focus:outline-none focus:ring-2 focus:ring-detail"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-detail-red">{error}</p>}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-detail text-dark rounded-xl font-bold hover:bg-detail-green transition duration-1000"
                        >
                            Enviar Mensaje
                        </button>
                    </div>
                </form>
            </section>

            {/* Aquí se renderiza el contenedor de Toastify */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    );
};

export default ContactForm;
