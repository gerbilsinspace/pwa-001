import React from 'react'
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography'
import { connect } from 'react-redux';

const List = props => {
  const { data } = props;

  const cards = data.map((dataItem, index) => (
    <Card key={index}>
      <CardContent>
        <Typography variant="headline" component="h2">{dataItem.title}</Typography>
        <Typography>{dataItem.smallDescription}</Typography>
        <Typography>Type: {dataItem.contentType}</Typography>
      </CardContent>
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
  data: [
    {
      title: 'Title 1',
      smallDescription: 'Small Description',
      contentType: 'movie'
    },
    {
      title: 'Title 2',
      smallDescription: 'Small Description',
      contentType: 'movie'
    }
  ]
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(List);