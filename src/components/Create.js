import React from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import {
  setModal,
  changeTitle,
  changeMediumDescription,
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

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const Create = (props) => {
  const {
    modalVisible = false,
    onCloseModalClick,
    classes,
    title,
    mediumDescription,
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
                id="mediumDescription"
                label="Medium Description"
                value={mediumDescription}
                onChange={handleChange('mediumDescription')}
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
                onSaveClick(title, mediumDescription, contentType);
              }}>Save</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const StyledCreateModal = withStyles(styles)(Create);

const mapStateToProps = state => ({
  modalVisible: state.modalVisible,
  title: state.title,
  mediumDescription: state.mediumDescription,
  contentType: state.contentType
});

const mapDispatchToProps = dispatch => ({
  onCloseModalClick: () => {
    dispatch(setModal(false));
  },
  handleChange: name => event => {
    if (name === 'title') {
      dispatch(changeTitle(event.target.value));
    } else if (name === 'mediumDescription') {
      dispatch(changeMediumDescription(event.target.value));
    } else if (name === 'type') {
      dispatch(changeType(event.target.value));
    }
  },
  onSaveClick: (title, mediumDescription, contentType) => {
    dispatch(addData(title, mediumDescription, contentType));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StyledCreateModal);