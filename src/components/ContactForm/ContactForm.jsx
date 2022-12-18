import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Form, Formik, Field } from 'formik';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    onSubmit(value);
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <Form className={css.contactForm} autoComplete="off">
          <label className={css.contactForm__label} htmlFor="name">
            Name
            <Field
              className={css.contactForm__field}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              placeholder="Contact Name"
              required
            />
          </label>
          <label className={css.contactForm__label} htmlFor="Number">
            Number
            <Field
              className={css.contactForm__field}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              name="number"
              placeholder="Contact Number"
              required
            />
          </label>
          <button className={css.contactForm__btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
