import React, { useEffect, useRef } from 'react';

const Paypal = () => {
    const paypalRef = useRef();

    useEffect(() => {
     
        const script = document.createElement("script");
        script.src = "https://www.paypal.com/sdk/js?client-id=AR1cGfvLOS38-1XIgatCHEXMryjaT1tvY0L0YwWOGo2HKOREC4SZa86U0iwh5PIsD1HQKNn57ZPPdi-G"; 
        script.addEventListener("load", initializePaypalButton);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const initializePaypalButton = () => {
        if (!window.paypal) {
            console.error('PayPal SDK is not loaded');
            return;
        }

        window.paypal.Buttons({
            createOrder: function(data, actions) {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        description: 'Email is everything',
                        amount: {
                            currency_code: 'USD', 
                            value: '1.00'
                        }
                    }]
                });
            },
            onApprove: async function(data, actions) {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: function(err) {
                console.error(err);
            }
        }).render(paypalRef.current);
    };

    return (
        <div ref={paypalRef}></div>
    );
};

export default Paypal;
