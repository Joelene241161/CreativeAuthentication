import React from 'react';
import Button from 'react-bootstrap/Button';

function Account() {
  // For error prevention
  let user = null;
  try {
    const storedUser = localStorage.getItem("user");
    // Only runs if the item exists
    if (storedUser && storedUser !== "undefined") {
      user = JSON.parse(storedUser);
    }
  } catch (err) {
    console.error("Error parsing user data from local storage", err);
    user = null; // Fallback safely if anything goes sideways
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  // If the user is missing
  if (!user) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3>You are not logged in</h3>
        <p>Please sign in to view your account details.</p>
        <Button onClick={() => window.location.href = "/login"}>Go to Login</Button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", marginTop:"5%" }}>
      <h1 className="m-plus-rounded-1c-bold">Account Details</h1>
      
      <div style={{ marginBottom: "20px" }}>
        <p className='inter-regular'><strong>Username:</strong> {user.name}</p>
        <p className='inter-regular'><strong>Email:</strong> {user.email || "No email stored"}</p>
        <p className='inter-regular'>
          <strong>Account Type:</strong> {user.userRole === "S" ? "Seller" : "Customer"}
        </p>
      </div>

      <Button 
        onClick={handleLogout}> Log out</Button>
    </div>
  );
}

export default Account;