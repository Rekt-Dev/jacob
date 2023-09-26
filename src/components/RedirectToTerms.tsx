import React, { useEffect } from 'react';

function RedirectToTerms() {
  useEffect(() => {
    // Redirect to the external file or URL
    window.location.href = '/Terms';
  }, []);

  return (
    <div>
      Redirecting to the terms...
    </div>
  );
}

export default RedirectToTerms;
