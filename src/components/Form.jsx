import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { InfoIcon } from "../icons/InfoIcon";

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
      onSubmit={(values) => {
        console.log("Uploaded file:", values.email);
      }}
    >
      {({ errors, touched }) => {
        return (
          <Form className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className=" text-Neutral-0 text-[18px] leading-[150%] tracking-[-0.2px]"
              >
                Email Address
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="example@email.com"
                className={`bg-Neutral-800 border  rounded-[10px] px-[16px] py-[12px] text-Neutral-300 placeholder:text-Neutral-300 text-[18px] leading-[150%] tracking-[-0.2px] w-full  cursor-pointer p-[16px]  hover:bg-[#ffffff33] backdrop-blur-[5px]    focus:outline-2 focus:outline-offset-2 focus:outline-[#8784A5] ${
                  errors.email && touched.email
                    ? "border-[#F57463]"
                    : "border-Neutral-600"
                }`}
                aria-describedby="emailError"
                aria-invalid={errors.email && touched.email ? "true" : "false"}
              />
              {errors.email && touched.email && (
                <p
                  id="emailError"
                  className=" tracking-[-0.2px] leading-[14.4px] text-[12px] flex items-center gap-[8px] text-[#F57463]"
                >
                  <InfoIcon />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            <div className="flex flex-col gap-[8px]">
              <button
                type="submit"
                className="cursor-pointer bg-Blue-500 border border-[#EEEEEE] rounded-[10px] text-Neutral-900 px-[24px] py-[12px] font-medium text-[18px] leading-[150%] tracking-[-0.5px] w-fit"
              >
                Stay updated
              </button>
              <p className="text-Neutral-400 text-[16px] leading-[130%] tracking-[-0.2px]">
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
