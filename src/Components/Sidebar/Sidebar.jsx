import { IoSettingsOutline } from "react-icons/io5";
import { TbMessageDots } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <dev className='sidebar_bg'>
      <div className="sidebar_row">
        <div className="sidebar_col_1">
          <div className='sidebar_logo_box'>
            <img src='/public/logo.png' className='sidebar_logo' alt="logo" />
          </div>
          <div className="sidebar_option_list">
            <button type='button' className='sidebar_option'><TbMessageDots /></button>
            <button type='button' className='sidebar_option'><HiOutlineUsers /></button>
            <button type='button' className='sidebar_option'><MdOutlinePermPhoneMsg /></button>
            <button type='button' className='sidebar_option'><IoSettingsOutline /></button>
          </div>
        </div>
        <div className="sidebar_col_2">
          <div className="sidebar_option_list">
            <div class="form-check form-switch d-flex justify-content-center">
              <input class="form-check-input" type="checkbox" role="switch" />
            </div>
            <button type='button' className="sidebar_profile_img_box">
              <img src='/public/user.png' className='img-fluid' alt="profile image" />
            </button>
          </div>
        </div>
      </div>
    </dev>
  )
}

export default Sidebar