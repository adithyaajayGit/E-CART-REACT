import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-light mt-5 text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#3b5998' }} href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#55acee' }} href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#0082ca' }} href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>
          <MDBBtn floating className='m-1' style={{ backgroundColor: '#333333' }} href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon='gem' className='me-3' />
                E-CART
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>


            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

    </MDBFooter>
    




  );
};

export default Footer;