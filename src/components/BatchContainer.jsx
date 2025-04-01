import Batch from "../utils/class/batch.class";
import PropTypes from "prop-types";

function BatchContainer({ batch }) {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const currentDateFormat = new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "/");

  function getFutureDate(monthsAhead) {
    const date = new Date();
    date.setMonth(date.getMonth() + monthsAhead); // Add X months
    return `${date.getFullYear()}/${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}`;
  }

  return (
    <div className="font-poppins  flex flex-col gap-2 p-2  text-[8px] leading-tight pdf-cell">
      <h2 className="text-center  text-[15px] font-bold">
        {batch.itemName}
      </h2>
      <div className="flex flex-col items-center">
        <p className="  text-[8px]">
          Peso Neto al empacar <span>{batch.totalWeight}</span>
        </p>
        <p className="  text-[8px]">
          Registro ICA - <span>{batch.itemICAId}</span>
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-[15px]  font-bold">
          INDICACIONES DEL PRODUCTO
        </h2>
        <p className="break-words  text-[10px] whitespace-pre-wrap">
          {batch.indications}
        </p>
      </div>
      <div className="text-center">
        <h2 className="text-[15px] font-bold">INGREDIENTES</h2>
        <p className="font-semibold  text-[12px] break-words ">
          {batch.ingredients}
        </p>
      </div>
      <div className="text-right">
        <p>F.VENC {getFutureDate(batch.usefulLife)}</p>
        <p>F.PROD {currentDateFormat}</p>
      </div>
      <div className="text-center self-end  py-1  font-bold text-[15px]">
        LOTE {currentDate}
      </div>
      <div className="flex justify-between">
        <div>
          <p className=" text-[7px]">
            Fabricado por: Juan Carlos Auza Fernandez
          </p>
          <p className="  text-[7px]">
            Dirección: Calle 2 Sur # 5 A 53 Neiva, Huila
          </p>
          <p className=" text-[7px]">
            E-Mail: alimentosaucol@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

BatchContainer.propTypes = {
  batch: PropTypes.instanceOf(Batch).isRequired,
};

export default BatchContainer;
