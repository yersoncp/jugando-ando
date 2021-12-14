import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { FC } from 'react';

type IProps = {
  onClick: (email: string) => void
}

type Inputs = {
  email: string,
};

const SelectedUser: FC<IProps> = ({ onClick }) => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    onClick(data.email);
  }
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="items">
        <input className="control control-wishlist" {...register("email")} placeholder="¿Cuál es tu mail?" />
        <button className="button">Aceptar</button>
      </div>
    </form>
  </>
}
export default SelectedUser