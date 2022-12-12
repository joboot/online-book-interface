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

        <footer className='footer2'>
            <ul className='ul'>
                <li>Contact Info:</li>
                <li>(402) 804-2507</li>
                <li>3716 Gordon Tunnel, 21683, Ralphfurt, Minnesota, United States</li>
                <li>helpdesk@company.com</li>
                <li>Office Hours: Monday-Friday 7-5</li>
            </ul>    
        </footer>

    </div>
  );
}

export default SupportPage;