import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import { setModal, setFilter, setPage } from '../actions';
import { setCollection } from '../client';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const HeaderComponent = ({
  classes,
  onAddButtonClick,
  filter,
  page,
  onPageChangeClick,
  handleFilterChange,
  onFilterClick
}) => (
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
      </Toolbar>
    </AppBar>
  </div>
);

const mapStateToProps = state => ({
  modalVisible: state.modalVisible,
  filter: state.filter,
  endpoint: state.endpoint,
  page: state.page,
  data: state.data
});

const mapDispatchToProps = dispatch => ({
  onAddButtonClick: () => {
    dispatch(setModal(true));
  },
  handleFilterChange: event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  },
  onFilterClick: async (filter, page) => {
    setCollection(filter, page);
    dispatch(setFilter(''))
  },
  onPageChangeClick: async (filter, page) => {
    setCollection(filter, page);
    dispatch(setPage(page));
  }
})

const styledHeader = withStyles(styles)(HeaderComponent);

export default connect(mapStateToProps, mapDispatchToProps)(styledHeader);
