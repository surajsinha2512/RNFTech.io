import React from 'react';

export default function Signup() {
    return (
        <form>
            <label>
                <p>First Name</p>
                <input type="text" />
            </label>
            <label>
                <p>Last Name</p>
                <input type="text" />
            </label>
            <label>
                <p>Bio</p>
                <input type="text" />
            </label>
            <label>
                <label>
                    <p>Email</p>
                    <input type="text" />
                </label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}