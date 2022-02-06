import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import s from './settings.module.css';
import { useDispatch } from 'react-redux';
import { changeInitials } from '../../features/user/userSlice';
import { useSelector } from 'react-redux';

export default function SettingsComponent({isModalVisible, setIsModalVisible}) {

    const user = useSelector(state => state.userReducer.user);

    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);
    const [city, setCity] = useState(user.city);

    const dispatch = useDispatch();

    const handleOk = () => {
            dispatch(changeInitials({name, username, city}))
            setIsModalVisible(false);
        };

    const handleCancel = () => {
        setIsModalVisible(false);
      };

  return (
    <div className={s.modalVisible}>

      <Modal title="Settings" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <form className={s.form}>
            <label >NAME<input  type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/></label>
            <label >SURNAME<input type="text" value={username} onChange={(e) => setUsername(e.currentTarget.value)} /></label>
            <label >CITY<input type="text" value={city} onChange={(e) => setCity(e.currentTarget.value)} /></label>          
          </form>
      </Modal>

    </div>
  );
}
