import React from 'react';
import Card, { CardContent, CardActions } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import {
  setEditModal,
  setEditIndex,
  setDeleteModal,
  setDeleteIndex,
  changeTitle,
  changeMediumSynopsis,
  changeType
} from '../actions';

const List = ({
  data = [],
  onEditStartClick,
  onDeleteStartClick
}) => {
  const cards = data.map((dataItem, index) => (
    <Card key={index}>
      <CardContent>
        <Typography variant="headline" component="h2">{dataItem.title}</Typography>
        <Typography>Medium Synopsis: {dataItem.mediumSynopsis || ''}</Typography>
        <Typography>Type: {dataItem.contentType || dataItem.type || ''}</Typography>
        <Typography>Owner: {dataItem.owner || ''}</Typography>
      </CardContent>
      <CardActions style={{paddingBottom: '20px', paddingLeft: '10px' }}>
        <Button variant='raised' color='primary' style={{
          marginRight: '10px'
        }} onClick={() => {
          onEditStartClick(index, dataItem.title, dataItem.mediumSynopsis, dataItem.type);
        }}>Edit</Button>
        <Button variant='raised' color='secondary' onClick={() => {
          onDeleteStartClick(index);
        }}>Delete</Button>
      </CardActions>
    </Card>
  ));

  return (
    <div className="List" style={{
      marginTop: '100px'
    }}>
      {cards}
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  editModal: state.editModal,
  deleteModal: state.deleteModal
});

const mapDispatchToProps = dispatch => ({
  onEditStartClick(index, title, mediumSynopsis, contentType) {
    dispatch(changeTitle(title));
    dispatch(changeMediumSynopsis(mediumSynopsis));
    dispatch(changeType(contentType));
    dispatch(setEditIndex(index));
    dispatch(setEditModal(true));
  },
  onDeleteStartClick(index) {
    dispatch(setDeleteIndex(index));
    dispatch(setDeleteModal(true, index));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);