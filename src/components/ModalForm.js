import React from 'react';
import TextField from 'material-ui/TextField';
import { FormControl } from 'material-ui/Form';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';
import { MenuItem } from 'material-ui/Menu';

const ModalForm = ({ title, handleChange, mediumSynopsis, contentType, onSaveClick, reference }) => (
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
        onSaveClick(title, mediumSynopsis, contentType, reference);
      }}>Save</Button>
    </div>
  </form>
);

export default ModalForm;