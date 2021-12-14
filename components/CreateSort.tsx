import firebase from '../app/firebase'
import { v4 } from 'uuid';
import { useFieldArray, useForm } from 'react-hook-form';
import SuccessSort from './SuccessSort';
import { useState } from 'react';

type FormValues = {
  user: {
    name: string;
    email: string;
  }[];
};

const CreateSort = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [keySuccess, setKeySuccess] = useState('');
  const keyEvent = v4();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      user: [{ name: "", email: "" }]
    },
    mode: "onBlur"
  });
  const { fields, append, remove } = useFieldArray({
    name: "user",
    control
  });

  const onSubmit = (data: FormValues) => {
    console.log(keyEvent);
    data.user.forEach(user => {
      const keyUser = v4();
      firebase.database().ref(`events/${keyEvent}/emailList/${keyUser}`).set({
        name: user.name,
        email: user.email
      })
    })
    setIsSuccess(true);
    setKeySuccess(keyEvent);
  }

  // const retrieve = async () => {
  //   return await firebase.database().ref(`events/${keyEvent}}`).once('value');
  // }

  return <>
    <p>Ingresa los correos de los participantes para sortear los amigos secretos</p>

    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={"items"} key={field.id}>
              <input
                placeholder="Nombre"
                {...register(`user.${index}.name` as const, {
                  required: true
                })}
                className={errors?.user?.[index]?.name ? "control error" : "control"}
              />
              <input
                placeholder="Correo electrónico"
                {...register(`user.${index}.email` as const, {
                  required: true
                })}
                className={errors?.user?.[index]?.email ? "control error" : "control"}
              />
              <button className="link red" type="button" onClick={() => remove(index)}>
                X
              </button>
            </section>
          </div>
        );
      })}

      <div className="mb-30">
        <button
          className="link"
          type="button"
          onClick={() =>
            append({
              name: '',
              email: '',
            })
          }
        >
          + Añadir más
        </button>
      </div>
      <div>
        <input className="button" type="submit" value="Generar sorteo" />
      </div>
    </form>

    {isSuccess && <SuccessSort id={keySuccess} />}
  </>
}
export default CreateSort