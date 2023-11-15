import './Settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { selectUser } from '../../components/feature/userSlice';
import { useState } from 'react';

export default function Settings() {

  const currentUser = useSelector(selectUser);

  const [formData, setFormData] = useState({
    userId : currentUser.user.userId
  })

  const UpdateUserDetails = (e) => {
    e.preventDefault();
    console.log(formData)
    setFormData({ ...formData, ["dateModified"]: new Date().toISOString() })
    console.log(formData)
    const res = axios.put("https://localhost:7148/User/"+currentUser.user.userId, formData)
    console.log(res)
  }

  const handleInputChange = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showPreview = (e) => {
    console.log(e)
    console.log(e.target.name, e.target.value)
    if(e.target.value.trim() !== ''){
      document.getElementsByClassName('profile-picture-preview-container')[0].style.display = 'block';
      document.getElementById('profImage').innerHTML = `<img src="${e.target.value}" alt="previewimg"
      style="max-width:100%; max-height:200px"/>`
    }
  }

  const handlePictureDelete = (e) => {
    document.getElementById('profImage').innerHTML = "";
    document.getElementsByName('profilePic')[0].value = "";
    document.getElementsByClassName('profile-picture-preview-container')[0].style.display = 'none';

  }


  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsTitleUpdate'>Update Your Account</span>
          <span className='settingsTitleDelete'>Delete Account</span>
        </div>
        <form className='settingsForm' onSubmit={UpdateUserDetails}>
          <div className="profile-picture-preview-container" style={{display:'none'}}>
              <label>Profile Picture</label>
              <div className='settingsPP'>
                <div className="imagePreview"  id='profImage'>

                </div>
                <label htmlFor='fileInput'>
                  <i className='fa fa-trash settingsPPIcon' onClick={handlePictureDelete}></i>{' '}
                </label>
              </div>
          </div>
          
          <label>Username</label>
          <input type='text' placeholder='Enter Name' name='userName' onChange={handleInputChange}/>
          <label>Email</label>
          <input type='email' placeholder='here@gmail.com' name='email' onChange={handleInputChange}/>
          <label>Password</label>
          <input type='password' placeholder='Password' name='password' onChange={handleInputChange}/>
          <label>Profile Picture Link</label>
          <input type='text' placeholder='Paste image URL here' name='profilePicture' onBlur={showPreview} onChange={handleInputChange}/>
          <button className='settingsSubmitButton' type='submit'>
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
