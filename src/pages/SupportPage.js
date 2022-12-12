import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SupportPage() {
  return (
    <div>
        <img src="../images/support_image.jpg"></img>
        <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
                With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
  );
}

export default SupportPage;