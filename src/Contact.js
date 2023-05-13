import React from 'react';
import ContactStyle from './ContactStyle.css';

export const Contact = () => {
  return (
    <div>
        <div className='contact-main-div'>
        <h2>Contact Us</h2>
        <hr/>
        
       <div className='form-div'>
    <form>
        <div className='one'>
            <label>First Name
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
            <label>Last Name
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
        </div>

        <div className='two'>
            <label>Work Email
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
            <label>Business Phone
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
        </div>

        <div className='three'>
            <label>Organization
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
            <label>Job Role
            <span>*</span><br/>
            <input type="text" name="name" />
            </label>
        </div>
        <div className='four'>
        <label>Country</label>
      <br/>
       <select>
        <option> Select Country  </option>
        <option>Afghanistan</option>
        <option>Albania</option>
        <option>Algeria</option>
        <option> Andorra </option>
        <option>Angola</option>
        <option>Antigua and Barbuda</option>
        <option>Argentina</option>
        <option>Armenia</option>
        <option>Australia</option>
        <option>Austria</option>
        <option>Azerbaijan</option>
       <option> Bahamas </option> 
       <option>Bahrain  </option> 
       <option> Bangladesh </option>
       <option> Barbados </option>
       <option> Belarus </option>
       <option> Belgium </option>
       <option> Belize </option>
       <option> Benin </option>
       <option>Bhutan  </option>
       <option>Bolivia  </option>
       <option> Bosnia and Herzegovina </option>
       <option>Botswana</option>
       <option>Brazil</option>
       <option>Brunei</option>
      <option>Bulgaria</option>
       <option>Burkina Faso</option>
       <option>Burundi</option>
</select>
</div>
<br/>
<div className='five'>
<label>Your Message </label><br/>
<textarea></textarea>
</div>
</form>
</div>
<div className='contact-btn'><button>Submit</button></div>

</div>
</div>
  )
}
