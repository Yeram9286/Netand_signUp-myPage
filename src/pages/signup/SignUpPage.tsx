// SignUpPage.tsx
import React from 'react';
import SignUpForm from './SignUpForm';
import styles from './SignUpForm.module.css';

const SignUpPage = () => {
  return (
    <div className={styles.container}>
      <h1 style={{ color: '#000000' }}>회원가입</h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;
