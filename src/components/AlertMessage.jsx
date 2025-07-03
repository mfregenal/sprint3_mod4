import { useState, useEffect } from 'react';

function AlertMessage({ message }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1000); // EJECUTA LA FUNCIÓN UNA VEZ POR 1 SEGUNDOS
    return () => clearTimeout(timer); // CANCELA EL SETTIMEOUT
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-2 rounded shadow-lg transition duration-300">
      {message}
    </div>
  );
}

export default AlertMessage;

