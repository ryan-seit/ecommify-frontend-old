import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const searchTerm = useSelector(state => {
    return {
      searchTerm: state.searchTerm
    }
  })

  const dispatch = useDispatch()

  const handleFormSubmit = e => {
    e.preventDefault()
    dispatch({ type: "SET_SEARCHTERM" })
  }

  return (
    <div className="NavBar">
      
      <div className="NavTop">
        <div className="Contact">800-555-1212</div>
        
        <div className="NavTopR">
          <div >
            <form className="Search" onSubmit={handleFormSubmit}>
              <input type="text" value={searchTerm}
                onChange={e => dispatch({ type: "SET_SEARCHTERM", payload: e.target.value })}
              />
              <button>Search</button>
            </form>
          </div>
          <div className="Account">Account</div>
          <div className="Cart">Cart</div>
        </div>
      </div>
      
      <div className="NavBot">
          <Link to={'/'}>
            <div className="Logo">coda</div>
          </Link>
          <h3 className="NavCategory">Underwear</h3>
          <h3 className="NavCategory">Bras</h3>
          <h3 className="NavCategory">Apparel</h3>
          <h3 className="NavCategory">About</h3>
      </div>

    </div>
  )
}

export default NavBar;