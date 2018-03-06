import React from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import {
  setModal,
  changeTitle,
  changeMediumSynopsis,
  changeType,
  addData
} from '../actions';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';
import { createData, setCollection } from '../client';

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
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={modalVisible}
        onClose={onCloseModalClick}
      >
        <div style={getModalStyle()} className={classes.paper}>
          <Typography variant="title" id="modal-title">
            Create
          </Typography>  
          <form noValidate autoComplete="off">
            <div>
              <TextField
                id="title"
                label="Title"
                value={title}
                onChange={handleChange('title')}
                margin="normal"
                style={{
                  width: '100%'
                }}
              />
            </div>
            <div>
              <TextField
                id="mediumSynopsis"
                label="Medium Synopsis"
                value={mediumSynopsis}
                onChange={handleChange('mediumSynopsis')}
                margin="normal"
                multiline
                rows='4'
                style={{
                  width: '100%'
                }}
              />
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="content-type" style={{
                  width: '100%'
                }}>Type</InputLabel>
                <Select
                  value={contentType || 'episode'}
                  onChange={handleChange('type')}
                  inputProps={{
                    name: 'contentType',
                    id: 'content-type',
                  }}
                >
                  <MenuItem value='episode'>Episode</MenuItem>
                  <MenuItem value='show'>Show</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Button variant='raised' color='primary' onClick={() => {
                onSaveClick(title, mediumSynopsis, contentType);
              }}>Save</Button>
            </div>
          </form>
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
    dispatch(addData(title, mediumSynopsis, contentType || 'episode'));
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