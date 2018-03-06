import React from 'react';
import { withStyles } from 'material-ui/styles';
import Modal from 'material-ui/Modal';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { setDeleteModal } from '../actions';
import { findItem, setCollection } from '../client';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  }
})

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Delete = ({
  open,
  onDeleteModalCloseClick,
  classes,
  onDeleteConfirmClick,
  item,
  filter,
  page
}) => {
  const ref = item && item.ref ? item.ref : '';
  return (
    <Modal
      aria-labelledby="delete-modal"
      aria-describedby="delete-modal"
      open={open}
      onClose={onDeleteModalCloseClick}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="title" id="delete-modal-title">Delete</Typography>
        <Typography>Are you sure you want to delete this item?</Typography>

        <Button variant='raised' style={{
          marginRight: '10px',
          marginTop: '20px'
        }} onClick={onDeleteModalCloseClick}>Cancel</Button>
        <Button variant='raised' color='secondary' style={{
          marginTop: '20px'
        }} onClick={() => {
          onDeleteConfirmClick(ref, filter, page);
        }}>Delete</Button>
      </div>
    </Modal>
  );
}

const mapStateToProps = state => ({
  open: state.deleteModal,
  deleteIndex: state.deleteIndex,
  item: state.data[state.deleteIndex],
  filter: state.filter,
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  onDeleteModalCloseClick: () => {
    dispatch(setDeleteModal(false));
  },
  onDeleteConfirmClick: async (ref, filter, page) => {
    // TODO: Delete item
    const item = await findItem(ref);
    await item.destroy();
    setCollection(filter, page);
    dispatch(setDeleteModal(false));
  }
});

const StyledDeleteModal = withStyles(styles)(Delete);

export default connect(mapStateToProps, mapDispatchToProps)(StyledDeleteModal);