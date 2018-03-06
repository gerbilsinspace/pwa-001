import React from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import {
  setModal,
  changeTitle,
  changeMediumSynopsis,
  changeType
} from '../actions';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import { createData, setCollection } from '../client';
import ModalForm from './ModalForm'

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

const Create = (props) => {
  const {
    modalVisible = false,
    onCloseModalClick,
    classes,
    title,
    mediumSynopsis,
    contentType,
    handleChange,
    onSaveClick
  } = props;

  return (
    <div>
      <Modal
        aria-labelledby="create-modal"
        aria-describedby="create-modal"
        open={modalVisible}
        onClose={onCloseModalClick}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="create-modal-title">
            Create
          </Typography>
          <ModalForm
            title={title}
            mediumSynopsis={mediumSynopsis}
            contentType={contentType}
            handleChange={handleChange}
            onSaveClick={onSaveClick}
          />
        </div>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  modalVisible: state.modalVisible,
  title: state.title,
  mediumSynopsis: state.mediumSynopsis,
  contentType: state.contentType
});

const mapDispatchToProps = dispatch => ({
  onCloseModalClick: () => {
    dispatch(setModal(false));
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
  onSaveClick: async (title, mediumSynopsis, contentType) => {
    await createData({
      title,
      mediumSynopsis: mediumSynopsis || '',
      type: contentType || 'episode',
      owner: 'demo'
    });
    setCollection();
    dispatch(changeTitle(''));
    dispatch(changeMediumSynopsis(''));
    dispatch(changeType(''));
    dispatch(setModal(false));
  }
});

const StyledCreateModal = withStyles(styles)(Create);

export default connect(mapStateToProps, mapDispatchToProps)(StyledCreateModal);