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
      <div className="sucess-overlay"></div>
      <div className="success-sort__content">
        <p className="heading1">Sorteo generado con éxito</p>
        <p>Tus amigos recibirán un correo electrónico con el nombre de su amigo secreto. Comparte este enlace para añadir una lista de deseos:</p>
        <input readOnly className="control" type="text" value={`${baseUrl}/event/${id}`} />
      </div>
    </div>
  </>
}
export default SuccessSort