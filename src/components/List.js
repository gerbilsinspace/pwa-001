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
import Loading from 'react-loading';

const List = ({
  data = [],
  onEditStartClick,
  onDeleteStartClick,
  loading,
  error
}) => {
  const cards = data.map((dataItem, index) => {
    return (
      <Card key={index}>
        <CardContent>
          <Typography variant="headline" component="h2">{dataItem.title}</Typography>
          <Typography>Medium Synopsis: {dataItem.mediumSynopsis || ''}</Typography>
          <Typography>Type: {dataItem.contentType || dataItem.type || ''}</Typography>
          <Typography>Owner: {dataItem.owner || ''}</Typography>
        </CardContent>
        <CardActions style={{ paddingBottom: '20px', paddingLeft: '10px' }}>
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
    );
  });

  if (loading) {
    return (
      <Loading style={{ width: '100px', height: '100px', margin: '100px auto 0 auto' }} delay={0} />
    );
  }

  if (error) {
    return (
      <div style={{ width: '300px', height: '100px', margin: '100px auto 0 auto' }}>
        <Typography variant="headline" style={{
          flex: 1,
          color: '#e00'
        }}>
          You appear to be offline
        </Typography>
      </div>
    );
  }

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
  deleteModal: state.deleteModal,
  loading: state.loading,
  error: state.error
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