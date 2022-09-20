import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import Editor from '../editor/editor';
import Preview from '../preview/preview';
import styles from './maker.module.css';
import { useState } from 'react';

const Maker = ({ authService }) => {

  const [cards, setCards] = useState([
    {
      id: '1',
      name: 'hg',
      company: 'samsung'
    },
    {
      id: '2',
      name: 'hg',
      company: 'samsung'
    },
    {
      id: '3',
      name: 'hg',
      company: 'samsung'
    }
  ]);

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  
  useEffect(() => {
    authService.onAuthChange(user => {
      if (!user) {
        history.push('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards ={cards}/>
        <Preview cards ={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
