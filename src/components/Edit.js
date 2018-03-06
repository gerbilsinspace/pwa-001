import React from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import ModalForm from './ModalForm';
import {
  setEditModal,
  changeTitle,
  changeMediumSynopsis,
  changeType
} from '../actions';
import { editData, findItem, setCollection } from '../client';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Edit = ({
  open,
  onEditModalCloseClick,
  classes,
  title,
  mediumSynopsis,
  contentType,
  handleChange,
  onSaveClick,
  editIndex,
  data
}) => {
  const ref = data && data[editIndex] ? data[editIndex].ref : '';
  return (
    <Modal
      aria-labelledby="delete-modal"
      aria-describedby="delete-modal"
      open={open}
      onClose={onEditModalCloseClick}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Typography variant="title" id="edit-modal-title">
          Edit
        </Typography>
        <ModalForm
          title={title}
          mediumSynopsis={mediumSynopsis}
          contentType={contentType}
          handleChange={handleChange}
          onSaveClick={onSaveClick}
          reference={ref}
        />
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  open: state.editModal,
  title: state.title,
  mediumSynopsis: state.mediumSynopsis,
  contentType: state.contentType,
  editIndex: state.editIndex,
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onEditModalCloseClick: () => {
    dispatch(setEditModal(false));
    dispatch(changeTitle(''));
    dispatch(changeMediumSynopsis(''));
    dispatch(changeType(''));
  },
  handleChange: name => event => {
    if (name === 'title') {
      dispatch(changeTitle(event.target.value));
    } else if (name === 'mediumSynopsis') {
      dispatch(changeMediumSynopsis(event.target.value));
    } else if (name === 'type') {
      dispatch(changeType(event.target.value));
    }
  },
  onSaveClick: async (title, mediumSynopsis, contentType, ref) => {
    const item = await findItem(ref);
    const result = Object.assign(item, { title, mediumSynopsis, type: contentType });
    await editData(result);
    dispatch(setEditModal(false));
    dispatch(changeTitle(''));
    dispatch(changeMediumSynopsis(''));
    dispatch(changeType(''));
    setCollection();
  }
});

const StyledEdit = withStyles(styles)(Edit);
export default connect(mapStateToProps, mapDispatchToProps)(StyledEdit);
