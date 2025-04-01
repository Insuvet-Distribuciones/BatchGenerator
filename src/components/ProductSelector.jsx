const ProductSelector = ({ Data, Current, Select }) => {
    return (
      <>
        <h3 className="pb-2">¡Selecciona qué vamos a hacer hoy!</h3>
        <ul className="flex flex-col gap-3">
          <p>
            Para poder continuar, debes asegurarte de{' '}
            <span className="font-bold">seleccionar el producto</span> que vamos
            a fabricar el día de hoy. Pero antes de descargar el archivo
            requerido, debes{' '}
            <span className="underline font-bold">rectificar</span> los datos que
            ves en pantalla.
          </p>
          {Data.map((item) => (
            <li key={item.id}>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="product"
                  value={item.id}
                  checked={Current.id === item.id}
                  onChange={() => {
                    Select(item)
                  }}
                />
                <span>{item.data.itemName}</span>
              </label>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default ProductSelector;