import { Formik, Form, Field, FormikProps, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export const StepOne = ()=>{

    // This makes it easier to validate the user inputs on the form fields.
    // each object key is the name of the input.
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
            <div className='py-2'>
                <Formik
                validationSchema={validationSchema}
                initialValues={{name:"", email:"", phone:""}}
                // Still no submit added.
                onSubmit={(values)=>{console.log(values)}}
                >
                    { ({values, errors, touched}) =>(
                        <Form className='flex flex-col gap-3'>
                            <div className='flex flex-col'>
                                <label>Name:</label>
                                <Field type="text" name="name" className={`px-2 py-1 border border-solid border-gray-300 rounded-lg ${errors.name && touched.name && "border-red-400"}`}/>
                                {errors.name && touched.name && (<div className=" text-red-600 md:absolute md:[top: 0px] md:[right:5%] text-sm">{errors.name}</div>)}
                            </div>
                            <div className='flex flex-col'>
                                <label>Email adress:</label>
                                <Field type="email" name="email" className={`px-2 py-1 border border-solid border-gray-300 rounded-lg ${errors.email &&  touched.email &&"border-red-400"}`}/>
                                {errors.email && touched.email && (<div className=" text-red-600 md:absolute md:[top: 0px] md:[right:5%] text-sm">{errors.email}</div>)}
                            </div>
                            <div className='flex flex-col'>
                                <label>Phone Number:</label>
                                <Field type="tel" name="phone" className={`px-2 py-1 border border-solid border-gray-300 rounded-lg ${errors.phone && touched.phone && "border-red-400"}`}/>
                                {errors.phone && touched.phone && (<div className=" text-red-600 md:absolute md:[top: 0px] md:[right:5%] text-sm">{errors.phone}</div>)}
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}