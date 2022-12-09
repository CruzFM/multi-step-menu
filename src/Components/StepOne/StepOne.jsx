import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const StepOne = ()=>{

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("*Your name is required."),
        email: Yup.string()
            .email()
            .required("*Your email is required."),
        phone: Yup.number().required("*Your phone number is required."),
    })

    return(
        <section>
            <h2 className=' text-2xl font-semibold'>Personal Info</h2>
            <p className=' text-gray-500 font-medium'>Please, provide your name, email adress, and phone number.</p>
            <div>
                <Formik
                validationSchema={validationSchema}
                initialValues={{name:"", email:"", phone:""}}
                onSubmit={(values)=>{console.log(values)}}
                >
                    { ({values, errors, touched}) =>(
                        <Form className='flex flex-col gap-3'>
                            <div className='flex flex-col'>
                                <label>Name:</label>
                                <Field type="text" name="name" className="px-2 py-1 border border-solid border-black"/>
                                {errors.name && touched.name && (<div className=" text-red-600">{errors.name}</div>)}
                            </div>
                            <div className='flex flex-col'>
                                <label>Email adress:</label>
                                <Field type="email" name="email" className="px-2 py-1 border border-solid border-black"/>
                                {errors.email && touched.email && (<div className=" text-red-600">{errors.email}</div>)}
                            </div>
                            <div className='flex flex-col'>
                                <label>Phone Number:</label>
                                <Field type="tel" name="phone" className="px-2 py-1 border border-solid border-black"/>
                                {errors.phone && touched.phone && (<div className=" text-red-600">{errors.phone}</div>)}
                            </div>
                        </Form>
                    )}
                </Formik>
                {/* <form>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" className="border border-solid border-black"/>
                    </div>
                    <div>
                        <label>Email adress</label>
                        <input type="email" name="email" className="border border-solid border-black"/>
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="border border-solid border-black"/>
                    </div>
                </form> */}
            </div>
        </section>
    )
}