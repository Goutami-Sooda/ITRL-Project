const activateModel = async (): Promise<void> => {
    try {
      const response = await fetch('http://127.0.0.1:8080/api/activate-model/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Model activated successfully');
        // Continue with other initialization or fetch data
      } else {
        console.error('Failed to activate the model');
        // Handle activation failure
      }
    } catch (error) {
      console.error('Error during model activation:', error);
      // Handle errors
    }
  };
  
  export { activateModel };
  