import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import errorIcon from "/assets/images/icon-error.svg";
import SuccessIcon from "../icons/SuccessIcon";
function FormContainer() {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setStatus }) => {
        console.log("Uploaded file:", values.email);
        resetForm();
        setStatus("You’re subscribed! Check your inbox for updates.");
        setTimeout(() => setStatus(null), 6000);
      }}
    >
      {({ errors, touched, status }) => {
        return (
          <Form className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className=" text-Neutral-700 dark:text-Neutral-0  text-[18px] leading-[150%] tracking-[-0.2px]"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className={` bg-Neutral-0 dark:bg-Neutral-800 border  rounded-[10px] px-[16px] py-[12px] text-Neutral-600 dark:text-Neutral-300 placeholder:text-Neutral-600  dark:placeholder:text-Neutral-300 text-[18px] leading-[150%] tracking-[-0.2px]   cursor-pointer p-[16px] 
                 hover:bg-Neutral-200   hover:dark:bg-Neutral-700  
                  focus:outline-none focus:shadow-[0_0_0_2px_#EFEDEB,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:m-[4px]   ${
                  errors.email && touched.email
                    ? "border-Red-600 dark:border-Red-400"
                    : status
                    ? "border-Green-700 dark:border-Green-500"
                    : "dark:border-Neutral-600 border-Neutral-300"
                }`}
                aria-describedby="emailError"
                aria-invalid={errors.email && touched.email ? "true" : "false"}
              />
              {errors.email && touched.email && (
                <p
                  id="emailError"
                  className=" tracking-[-0.2px] leading-[130%] text-[16px] flex items-center gap-[8px] text-Red-600 dark:text-Red-400"
                >
                  <img src={errorIcon} alt="error icon" />
                  <span>{errors.email}</span>
                </p>
              )}

              {status && (
                <div className="text-Green-700 dark:text-Green-500 text-[16px] racking-[-0.2px] leading-[130%]  flex items-center gap-[8px]">
                  <SuccessIcon />
                  <span>{status}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-[8px]">
              <button
                type="submit"
                className="cursor-pointer bg-Blue-500 hover:bg-Blue-700 border border-[#EEEEEE] rounded-[10px] text-Neutral-900 px-[24px] py-[12px] font-medium text-[18px] leading-[150%] tracking-[-0.5px] w-fit 
                focus:shadow-[0_0_0_2px_#FFFFFF,0_0_0_4px_#5792C0] focus:dark:shadow-[0_0_0_2px_#1C1A19,0_0_0_4px_#75B0DE] focus:border-transparent focus:m-[4px]"
              >
                Stay updated
              </button>
              <p className="text-Neutral-600 dark:text-Neutral-400 text-[16px] leading-[130%] tracking-[-0.2px]">
                Unsubscribe anytime. No spam, I promise 🙂
              </p>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormContainer;
