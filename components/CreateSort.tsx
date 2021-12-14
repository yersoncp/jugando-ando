import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
};

const CreateSort = () => {
  
  const keyEvent = v4();
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
  const keyUser = v4();
    firebase.database().ref(`events/${keyEvent}/emailList/${keyUser}`).set({
      name: data.name,
      email: data.email,
    })
  }
  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="First name" />
      <input {...register("email")} type="email" placeholder="First name" />
      <button className="button">Crear sorteo</button>
    </form>
  </>
}
export default CreateSort