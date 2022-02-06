import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import s from './settings.module.css';

export default function SettingsComponent({isModalVisible, setIsModalVisible}) {

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [city, setCity] = useState();

    const handleOk = () => {
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
            <label >SURNAME<input type="text" value={username} onChange={(e) => setName(e.currentTarget.value)} /></label>
            <label >CITY<input type="text" value={city} onChange={(e) => setName(e.currentTarget.value)} /></label>          
          </form>
      </Modal>

    </div>
  );
}
