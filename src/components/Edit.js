import React from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import { setEditModal } from '../actions';

const Edit = props => {
  const { open, onEditModalCloseClick } = props;

  return (
    <Modal
      aria-labelledby="delete-modal"
      aria-describedby="delete-modal"
      open={open}
      onClose={onEditModalCloseClick}
    >
      <div></div>
    </Modal>
  );
}

const mapStateToProps = state => ({
  open: state.editModal
});

const mapDispatchToProps = dispatch => ({
  onEditModalCloseClick: () => {
    dispatch(setEditModal(false));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
