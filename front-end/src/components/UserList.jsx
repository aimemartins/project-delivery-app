import React from 'react';
import PropTypes from 'prop-types';

import { requestDeleteUser } from '../services/requests';

export default function UserList({ id, name, email, role }) {
  const handleDelete = async (myId) => {
    try {
      await requestDeleteUser(`/users/${myId}`);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="user_list">
      <h2 data-testid={ `admin_manage__element-user-table-item-number-${id}` }>{id}</h2>
      <h2 data-testid={ `admin_manage__element-user-table-name-${id}` }>{name}</h2>
      <h3 data-testid={ `admin_manage__element-user-table-email-${id}` }>{email}</h3>
      <h3 data-testid={ `admin_manage__element-user-table-role-${id}` }>{role}</h3>
      <button
        type="button"
        onClick={ () => handleDelete(id) }
        data-testid={ `admin_manage__element-user-table-remove-${id}` }
      >
        Excluir
      </button>
    </div>
  );
}

UserList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};
