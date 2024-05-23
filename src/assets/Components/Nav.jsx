import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <>
        <nav className='mt-10 flex justify-center gap-10'>
            {/* Way-1==By using Style and Function */}
                <NavLink style={(e) => {
                    return {
                        color: e.isActive ? "tomato" : "",
                        fontWeight: e.isActive ? "bold" : "",
                    };
                }} to='/'>Home</NavLink>
            
            {/* Way-2 == By using inside the span */}
                <NavLink to="/user">
                        {(e) => {
                        return (
                            <span
                            className={[
                                e.isActive ? "text-red-300" : "",
                                e.isActive ? "font-semibold text-xl" : "",
                            ].join(" ")}>User</span>
                            );
                        }}
                </NavLink>
                
            {/* Way-3 == By using ClassName */}
                <NavLink className={(e)=>{
                    return [
                        e.isActive ? 'text-red-400' : '',
                        e.isActive ? 'font-semibold text-xl' : ''
                    ].join(" ");
                }} to='/About'>About</NavLink>
        </nav>
    </>
  )
}

export default Nav