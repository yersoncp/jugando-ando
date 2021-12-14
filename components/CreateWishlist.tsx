import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { FC } from 'react';

type IProps = {
  id: string,
}

type Inputs = {
  description: string,
};

const CreateWhishlist: FC<IProps> = ({ id }) => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    const key = v4();
    firebase.database().ref(`events/${id}/wishList/${key}`).set({
      user: 'yerson',
      email: 'yerson.rc@gmail.com',
      description: data.description
    }).finally(() => {
      setValue('description', '');
    })
  }
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="items">
        <input className="control control-wishlist" {...register("description")} placeholder="¿Qué quieres que te regalen?" />
        <button className="button">Agregar</button>
      </div>
    </form>
  </>
}
export default CreateWhishlist