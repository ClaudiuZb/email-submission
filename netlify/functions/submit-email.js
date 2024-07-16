exports.handler = async function(event, context) {
  const { email, token } = JSON.parse(event.body);
  
  console.log(`Received email: ${email} with token: ${token}`);
  
  // Here you would typically save this to a database
  // For now, we'll just return a success message
  
  return {
    statusCode: 200,
    body: JSON.stringify({message: "Email submitted successfully"})
  };
}; 
