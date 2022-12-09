import { Formik } from 'formik'
import * as Yup from 'yup'

export const StepOne = ()=>{
    return(
        <section>
            <h2>Personal Info</h2>
            <p>Please, provide your name, email adress, and phone number.</p>
            <div>
                <form>
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
                </form>
            </div>
        </section>
    )
}