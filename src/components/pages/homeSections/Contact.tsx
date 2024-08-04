import React, { useState } from "react";
import scss from "./Contact.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import ReactPlayer from "react-player";
// import { toast, Bounce, ToastContainer } from "react-toastify";

interface TelegramType {
  userName: string;
  email: string;
  subject: string;
  description: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TelegramType>({
    mode: "onChange",
  });
  const [sendButton, setSendButton] = useState<boolean>(false);
  const token = process.env.NEXT_PUBLIC_TG_TOKEN;
  const chat_id = process.env.NEXT_PUBLIC_CHAT_ID;

  const massageModel = (data: TelegramType) => {
    let massage = `𝐮𝐬𝐞𝐫𝐍𝐚𝐦𝐞: <b>${data.userName}</b> \n`;
    massage += `𝐄𝐦𝐚𝐢𝐥 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: <b>${data.email}</b> \n`;
    massage += `𝐒𝐮𝐛𝐣𝐞𝐜𝐭: <b>${data.subject}</b> \n`;
    massage += `𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: <b>${data.description}</b> \n`;
    return massage;
  };

  // const ReactMessage = () => {
  //   toast.success('🦄 Wow so easy!', {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "colored",
  //     transition: Bounce,
  //     });
  // }

  const onSubmit: SubmitHandler<TelegramType> = async (data) => {
    setSendButton(!sendButton);
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chat_id,
      parse_mode: "html",
      text: massageModel(data),
    });
    // ReactMessage()
    reset()
  };
  return (
    <section id="contact" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav}>
            <h1>Get In Touch</h1>
            <p>
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
          </div>
        </div>
        <div className={scss.form__content}>
          <div className={scss.tilt}>
            <div className={scss.animation__edge}>
             
            </div>
          </div>
          <div className={scss.tilt}>
            <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  {...register("userName", { required: true, minLength: 2 })}
                />
                <label htmlFor="name" className={scss.form__label}>
                  Your name
                </label>
                {errors.userName && (
                  <p className={scss.error}>Пожалуйста, введите ваше имя.</p>
                )}
              </div>

              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <label htmlFor="email" className={scss.form__label}>
                  Your email
                </label>
                {errors.email && (
                  <p className={scss.error}>
                    Пожалуйста, введите корректный адрес электронной почты.
                  </p>
                )}
              </div>

              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  {...register("subject", { required: true, minLength: 2 })}
                />
                <label htmlFor="subject" className={scss.form__label}>
                  Subject of inquiry
                </label>
                {errors.subject && (
                  <p className={scss.error}>
                    Пожалуйста, введите тему сообщения.
                  </p>
                )}
              </div>

              <div className={scss.form__group}>
                <textarea
                  className={`${scss.className} ${scss.form__field}`}
                  {...register("description")}
                />
                <label htmlFor="subject" className={scss.form__label}>
                  Your message
                </label>
              </div>

              <div className={scss.button__container}>
                {sendButton ? (
                  <button className={`${scss.button} ${scss.active}`}>
                    <span>Submit</span>
                  </button>
                ) : (
                  <button type="submit" className={scss.button}>
                    <span>Submit</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

