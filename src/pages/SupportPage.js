import { Container, Col, Row, Button, Card} from 'react-bootstrap'


function SupportPage() {
  return (
    <div>
      <Container>
        <Row className='pictureRow'>
          <img src={require("../images/support_image.jpg")} height="300px" width="600px" align="center" alt='Helpdesk woman'></img>
        </Row>
        <Card>
            <Card.Header as="h5">Help Feature</Card.Header>
            <Card.Body>
              <Card.Title>What is the Issue that you are Having?</Card.Title>
              <Card.Text>
                Type out the problem that you are having here. Please explain in detail as we are Dumb Dumbs after all.
              </Card.Text>
              <Button variant="primary">Submit Ticket</Button>
            </Card.Body>
        </Card>

        <footer className='footer2'>
            <ul className='ul'>
                <li>Contact Info:</li>
                <li>(402) 987-9876 </li>
                <li>403 W. Laurel St. Michigan City, IN 46360 United States</li>
                <li>dumbdumbhelpdesk@company.com</li>
                <li>Office Hours: Monday-Friday 8-10</li>
            </ul>    
        </footer>
      </Container>
    </div>
  );
}

export default SupportPage;