import React from 'react';
    import { Card, Button } from 'react-bootstrap';

const New = (props) => {
  const {title, description} =props.article;
    return (
        <div>
            <Card>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default New;