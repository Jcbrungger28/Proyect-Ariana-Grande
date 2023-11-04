import React from 'react'

const FormAri = () => {
    return (
        <section id='subscribe' className='container-formAri'>
            <form className='form-ari'>
                <h1>Subscribe</h1>

                <div className='container-formulario'>
                    <label>*Email</label>
                    <input type='email' placeholder='Email Address' name='Email' />
                    <hr />

                    <label>*Choose country</label>
                    <select name='country'>
                        <option value='colombia'>Colombia</option>
                        <option value='palestina'>Palestina</option>
                        <option value='argentina'>Argentina</option>
                        <option value='venezuela'>Venezuela</option>
                        <option value='western'>wester sahara</option>
                        <option value='uruguay'>Uruguay</option>
                        <option value='paraguay'>Paraguay</option>
                        <option value='españa'>España</option>
                        <option value='ukraine'>Ukraine</option>
                        <option value='turkey'>Turkey</option>
                        <option value='aruba'>Aruba</option>
                        <option value='Australia'>Australia</option>
                        <option value='afghanistan'>Afghanistan</option>
                        <option value='albania'>albania</option>
                        <option value='angola'>Angola</option>
                    </select>
                    <hr />

                    <h2>*Required Fields</h2>
                    <h3>Sign up to receive email updated from:</h3>

                    <div className='checkbox-ari'>
                        <input type='checkbox' name='ariana' />
                        <h4>Ariana</h4>

                        <input type='checkbox' name='RR' />
                        <h4>Republic Records</h4>
                    </div>

                    <div className='info-formulario'>
                        <p>Emails will be sent by or on behalf of Universal music Group 2220 Colorado A venue, Santa Monica, CA 904004 (310) 865-4000, You may withdraw your consent at any time, Privac Policy / Do Not Sell My Perrsonal Information</p>
                        <button className='btn-principal'>Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormAri;
