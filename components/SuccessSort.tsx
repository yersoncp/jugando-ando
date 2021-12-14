import { FC, useEffect, useState } from "react";

type IProps = {
  id: string;
};

const SuccessSort: FC<IProps> = ({ id }) => {
  const [baseUrl, setBaseUrl] = useState("");
  useEffect(() => {
    const url = window.location.href;
    setBaseUrl(url.substring(0, url.lastIndexOf("/")));
  }, []);

  return <>
    <div className="success-sort">
      {/* <div className="success-sort__icon">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
      </div> */}
      <div className="success-sort__text">
        <p className="heading1">Sorteo generado con éxito</p>
        <p>Tus amigos recibirán un correo electrónico con el nombre de su amigo secreto. Comparte este enlace para añadir una lista de deseos:</p>
        <input readOnly className="control" type="text" value={`${baseUrl}/event/${id}`} />
      </div>
    </div>
  </>
}
export default SuccessSort