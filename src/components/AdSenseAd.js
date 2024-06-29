import React, { useEffect } from 'react';

const AdSenseAd = () => {
  useEffect(() => {
    if (window) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-6221660864872022" // Replace with your client ID
      data-ad-slot="1234567890" // Replace with your ad slot ID
      data-ad-format="auto"
    />
  );
};

export default AdSenseAd;
