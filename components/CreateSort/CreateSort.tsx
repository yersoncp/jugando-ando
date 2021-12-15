import firebase from '../../app/firebase'
import { v4 } from 'uuid';
import { useFieldArray, useForm } from 'react-hook-form';
import SuccessSort from '../SuccessSort';
import { useState } from 'react';
import { sortFriends } from '../../app/utils/utils';
import { sendEmail } from '../../app/email-send/email-send.service';
import { IUser } from '../../app/interfaces';
import SpinnerIcon from '../Icons/SpinnerIcon';
import s from './CreateSort.module.css'

type FormValues = {
  user: {
    name: string;
    email: string;
  }[];
};

const CreateSort = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [keySuccess, setKeySuccess] = useState('');
  const keyEvent = v4();
  const {
    register,
    control,
    handleSubmit,
    reset,
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


  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    data.user.forEach(user => {
      const keyUser = v4();
      firebase.database().ref(`events/${keyEvent}/emailList/${keyUser}`).set({
        name: user.name,
        email: user.email
      })
    })

    const amigos = sortFriends(data.user as IUser[]);
    if (amigos) {
      await Promise.all(
        amigos.map(async (amigo) => {
          await sendEmail({
            to: amigo[0]?.email as string,
            subject: 'Tu amigo secreto es!! Tan tannnn',
            template: 'amigo-secreto-email',
            tags: ['test'],
            vars: {
              name: amigo[1]?.name,
              email: amigo[1]?.email
            }
          })
        })
      )
    }
    reset();
    setIsSuccess(true);
    setIsLoading(false);
    setKeySuccess(keyEvent);
  }

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
        <span><input disabled={isLoading} className="button" type="submit" value="Generar sorteo" /></span>
        {isLoading && <span className={s.loading}><SpinnerIcon /></span>}
      </div>
    </form>

    {isSuccess && <SuccessSort id={keySuccess} />}
  </>
}
export default CreateSort