import React from 'react';
import { useHistory } from 'react-router-dom';
import './Admin.css';
import Nav from '../Nav/Nav';

export default function Admin() {

  const history = useHistory();
  const pushHistory = url => history.push(url);

  return(
    <center>
      <Nav />
      <div className="main-container admin-padding">
        <div className="top-card-container">
          <h1>Welcome, Admin!</h1>
          <div className="admin-button-flex-container">
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>pushHistory('/admin/edit-calculator-info')}
              >
                Edit Calculators
              </button>
            </div>
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>pushHistory('/admin/edit-user-info')}
              >
                Edit User Information
              </button>
            </div>
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>pushHistory('/admin/edit-industry-info')}
              >
                Edit Industries
              </button>
            </div>
            <div className="admin-btn-flex-column">
              <button 
                className="circle-btn" 
                onClick={()=>pushHistory('/admin/help-about-page')}
              >
                Help Page
              </button>
            </div>

          </div>
        </div>
      </div>
    </center>
  );
}