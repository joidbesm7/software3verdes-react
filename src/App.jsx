import { useState } from "react";

function App() {
  const [placa, setPlaca] = useState("");
  const [propietario, setPropietario] = useState("");
  const [tipo, setTipo] = useState("");
  const [vehiculos, setVehiculos] = useState([]);

  const registrarVehiculo = () => {
    if (!placa || !propietario || !tipo) {
      alert("Complete todos los campos");
      return;
    }

    const nuevoVehiculo = {
      placa,
      propietario,
      tipo,
    };

    setVehiculos([...vehiculos, nuevoVehiculo]);

    setPlaca("");
    setPropietario("");
    setTipo("");
  };

  const eliminarVehiculo = (index) => {
    const nuevos = vehiculos.filter((_, i) => i !== index);
    setVehiculos(nuevos);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Software 3 Verdes</h1>
      <h2>Registro de Vehículos</h2>

      <input
        type="text"
        placeholder="Placa"
        value={placa}
        onChange={(e) => setPlaca(e.target.value)}
      />
      <br /><br />

      <input
        type="text"
        placeholder="Propietario"
        value={propietario}
        onChange={(e) => setPropietario(e.target.value)}
      />
      <br /><br />

      <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
        <option value="">Seleccione tipo</option>
        <option value="Carro">Carro</option>
        <option value="Moto">Moto</option>
        <option value="Bicicleta">Bicicleta</option>
      </select>

      <br /><br />

      <button onClick={registrarVehiculo}>Registrar</button>

      <hr />

      <h3>Vehículos registrados</h3>

      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Propietario</th>
            <th>Tipo</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo, index) => (
            <tr key={index}>
              <td>{vehiculo.placa}</td>
              <td>{vehiculo.propietario}</td>
              <td>{vehiculo.tipo}</td>
              <td>
                <button onClick={() => eliminarVehiculo(index)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;