import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'
import { setModal, setFilter, setPage } from '../actions';
import './header.css';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function HeaderComponent(props) {
  const { classes, onAddButtonClick, filter, page, onPageChangeClick, handleChange } = props;

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton onClick={onAddButtonClick} className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon>add</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" style={{
            flex: 1
          }}>
            Progressive Web App
          </Typography>
          <TextField
            id="filter"
            placeholder="Filter by Title"
            value={filter}
            onChange={handleChange('filter')}
            margin="normal"
            style={{
              background: '#fff',
              border: '1px solid #fff',
              borderRadius: '2px',
              padding: '0 5px 2px',
              marginRight: '10px',
              marginTop: '8px',
              boxShadow: "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
            }}
          />
          <Button variant='raised' style={{
            marginRight: '10px'
          }} onClick={() => {
            onPageChangeClick(page - 1);
          }}>Prev</Button>
          <Button variant='raised' onClick={() => {
            onPageChangeClick(page + 1);
          }}>Next</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = state => ({
  modalVisible: state.modalVisible,
  filter: state.filter,
  page: state.page
});

const mapDispatchToProps = dispatch => ({
  onAddButtonClick: () => {
    dispatch(setModal(true));
  },
  handleChange: type => event => {
    if (type === 'filter') {
      dispatch(setFilter(event.target.value));
    }
  },
  onPageChangeClick: page => {
    dispatch(setPage(page));
  }
})

const styledHeader = withStyles(styles)(HeaderComponent);

export default connect(mapStateToProps, mapDispatchToProps)(styledHeader);
